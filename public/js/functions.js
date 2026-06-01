// ─── Sessão ───────────────────────────────────────────────────────────────────
let idusuario = localStorage.getItem("idusuario");
if (!idusuario) { window.location.href = "login.html"; }

// ─── Elementos do DOM ────────────────────────────────────────────────────────
let button1      = document.getElementById("runButton");
let img1         = document.getElementById("img_1");
let pokemon_name = document.getElementById("pokemonName");

// ─── Estado do jogo ──────────────────────────────────────────────────────────
let pokemon      = 0;
var route        = 1;

// BUG 1 CORRIGIDO: havia duas variáveis para a vida do inimigo: "life/lifeMax" e "pokelife"
// O battlePoke usava "pokelife" mas o findPokemon1 definia "life" — variáveis diferentes!
// Agora existe só uma: pokelife (e pokelifeMax para calcular a barra em %)
let pokelife    = 0;
let pokelifeMax = 0;

let player = {
    pokedex:         0,
    catchMultiplier: 1,
    damage:          1,
    life:            10,
    badges:          0,
    elite:           0,
    champeon:        'false',
    qtdPokeball:     10,
};

// ─── AO CARREGAR: busca Treiner do banco ─────────────────────────────────────
fetch(`/treiners/${idusuario}`)
    .then(function(resposta) {
        // BUG 2 CORRIGIDO: sem verificar resposta.ok, se der 404 o código
        // tentava fazer .json() de uma mensagem de texto e quebrava silenciosamente
        if (!resposta.ok) throw new Error("Treiner não encontrado: " + resposta.status);
        return resposta.json();
    })
    .then(function(treiner) {
        player.pokedex         = treiner.pokedex;
        player.catchMultiplier = treiner.catchMultiplier;
        player.damage          = treiner.TrainerDamage;
        player.life            = treiner.TrainerLife;
        player.badges          = treiner.Badges;
        player.elite           = treiner.Elite;
        player.champeon        = treiner.Champeon;
        player.qtdPokeball     = treiner.qtdPokeballs;

        carregarPokedexDoBanco();
        updateData();
        console.log("Treiner carregado:", treiner);
    })
    .catch(function(erro) {
        console.log("Erro ao carregar treiner:", erro);
        alert("Erro ao carregar dados do jogador. Verifique se o servidor está rodando.");
    });

// ─── Salva o estado do jogador no banco ──────────────────────────────────────
function salvarTreiner() {
    fetch("/treiners/atualizar", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            idusuario:       idusuario,
            pokedex:         player.pokedex,
            catchMultiplier: player.catchMultiplier,
            TrainerDamage:   player.damage,
            TrainerLife:     player.life,
            Badges:          player.badges,
            Elite:           player.elite,
            Champeon:        player.champeon,
            qtdPokeballs:    player.qtdPokeball
        })
    })
    .then(function() { console.log("Treiner salvo."); })
    .catch(function(erro) { console.log("Erro ao salvar treiner:", erro); });
}

// ─── Carrega pokédex do banco e marca registered no array local ───────────────
function carregarPokedexDoBanco() {
    fetch(`/pokemons/${idusuario}`)
        .then(function(resposta) { return resposta.json(); })
        .then(function(lista) {
            lista.forEach(function(poke) {
                if (pokemons[poke.id]) {
                    pokemons[poke.id].registered = true;
                }
            });
            console.log("Pokédex carregada:", lista.length, "pokémons.");
        })
        .catch(function(erro) { console.log("Erro ao carregar pokédex:", erro); });
}

// ─── Carrega troféus do banco e marca unlocked no array local ─────────────────
function carregarTrofeusDoBanco() {
    fetch(`/trofeus/${idusuario}`)
        .then(function(resposta) { return resposta.json(); })
        .then(function(lista) {
            lista.forEach(function(t) {
                if (trophies[t.idtrofeu - 1]) {
                    trophies[t.idtrofeu - 1].unlocked = true;
                }
            });
            console.log("Troféus carregados:", lista.length, "desbloqueados.");
        })
        .catch(function(erro) { console.log("Erro ao carregar troféus:", erro); });
}

// ─── Atualiza os textos na sidebar ────────────────────────────────────────────
function updateData() {
    document.getElementById("msm_qtdPokeball").innerHTML = `Pokebolas: ${player.qtdPokeball}`;
    document.getElementById("H3life").innerHTML          = `Life: ${player.life}`;
    document.getElementById("H3damage").innerHTML        = `Damage: ${player.damage}`;
}
setInterval(updateData, 1000);

// ─── Auxiliares ───────────────────────────────────────────────────────────────
function rng(max, min) {
    return Math.random() * (max - min + 1) + min;
}

function run() {
    routes["route" + route]();
}

// ─── FIGHT ────────────────────────────────────────────────────────────────────
function battlePoke() {
    if (pokemon === 0 || pokelife <= 0) return;

    // Aplica o dano do jogador
    pokelife -= player.damage;
    pokelife  = Math.max(0, pokelife);

    // BUG 3 CORRIGIDO: o código antigo tentava getElementById("life") que não existe
    // O elemento correto no HTML é id="hpFill"
    // BUG 4 CORRIGIDO: a largura deve ser calculada em % relativa ao HP máximo,
    // não o valor absoluto de pokelife (que podia passar de 100 e quebrar a barra)
    var hpPercent = (pokelife / pokelifeMax) * 100;
    var hpFill = document.getElementById("hpFill");
    var hpText = document.getElementById("hpText");
    if (hpFill) hpFill.style.width = hpPercent + "%";
    if (hpText) hpText.innerHTML   = `${Math.round(pokelife)} / ${pokelifeMax}`;

    if (pokelife <= 0) {
        // Venceu: ganha pokeball e avança
        player.qtdPokeball += 1;
        salvarTreiner();
        run();
    } else {
        // Leva dano de volta
        player.life = Math.max(0, player.life - pokemons[pokemon].damage);
    }
}

// ─── BAG ─────────────────────────────────────────────────────────────────────
function catchPoke() {
    if (pokemon === 0) return;
    if (player.qtdPokeball <= 0) { alert("Sem pokebolas!"); return; }

    player.qtdPokeball -= 1;
    let actionCatch = rng(255, 1).toFixed(0);

    if (actionCatch <= pokemons[pokemon].catch_rate * player.catchMultiplier) {
        if (!pokemons[pokemon].registered) {
            pokemons[pokemon].registered = true;
            player.pokedex += 1;
            registrarPokemonNoBanco(pokemon);
            verificarTrofeusColecionador();
        }
    }

    salvarTreiner();
    run();
}

// ─── Registra pokemon no banco ────────────────────────────────────────────────
function registrarPokemonNoBanco(idPokemon) {
    fetch("/pokemons/registrar", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idusuario: idusuario, idPokemon: idPokemon })
    })
    .then(function() { console.log("Pokemon", idPokemon, "salvo."); })
    .catch(function(erro) { console.log("Erro ao registrar pokemon:", erro); });
}

// ─── Verifica troféus de colecionador ────────────────────────────────────────
function verificarTrofeusColecionador() {
    const metas = [
        { trofeuId: 41, meta: 10  },
        { trofeuId: 42, meta: 30  },
        { trofeuId: 43, meta: 60  },
        { trofeuId: 44, meta: 100 },
        { trofeuId: 45, meta: 125 },
        { trofeuId: 46, meta: 150 },
    ];
    metas.forEach(function(item) {
        if (player.pokedex >= item.meta && !trophies[item.trofeuId - 1].unlocked) {
            desbloquearTrofeuNoBanco(item.trofeuId);
        }
    });
}

// ─── Desbloqueia troféu no banco e no array local ────────────────────────────
function desbloquearTrofeuNoBanco(idTrofeu) {
    trophies[idTrofeu - 1].unlocked = true;
    fetch("/trofeus/desbloquear", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idusuario: idusuario, idTrofeu: idTrofeu })
    })
    .then(function() { console.log("Troféu", idTrofeu, "desbloqueado."); })
    .catch(function(erro) { console.log("Erro ao desbloquear troféu:", erro); });
}

// ─── Exibe o pokémon encontrado na rota ──────────────────────────────────────
async function findPokemon1() {
    if (pokemon === 0 || pokemon > 151) return;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data     = await response.json();

    // BUG 5 CORRIGIDO: havia shinychance >= 8192, o que nunca acontece com Math.random
    // O correto é == 8192 (chance de 1 em 8192)
    let shinychance = rng(8192, 1).toFixed(0);

    // Define a vida do inimigo ANTES de liberar o FIGHT
    pokelifeMax = pokemons[pokemon].life;
    pokelife    = pokemons[pokemon].life;

    var hpFill = document.getElementById("hpFill");
    var hpText = document.getElementById("hpText");
    if (hpFill) hpFill.style.width = "100%";
    if (hpText) hpText.innerHTML   = `${pokelifeMax} / ${pokelifeMax}`;

    if (pokemons[pokemon].canFind) {
        // BUG 6 CORRIGIDO: sprites.versions['generation-v']... pode não existir em todos os pokémons
        // Usando front_default/front_shiny que sempre existem na PokeAPI
        img1.src               = shinychance == 8192
            ? data.sprites.front_shiny
            : data.sprites.front_default;
        pokemon_name.innerHTML = shinychance == 8192
            ? `${pokemons[pokemon].name} ✨`
            : pokemons[pokemon].name;
    }
}

// ─── Funções dos líderes de ginásio ──────────────────────────────────────────
function carregarLider(indice, imgSrc, nomeRota, nomeLider) {
    img1.src = imgSrc;
    document.getElementById("spanRoute").innerHTML   = nomeRota;
    document.getElementById("pokemonName").innerHTML = nomeLider;
    pokelifeMax = lideres[indice].maxLife;
    pokelife    = lideres[indice].life;
    document.getElementById("hpText").innerHTML = `${pokelife} / ${pokelifeMax}`;
    var hpFill = document.getElementById("hpFill");
    if (hpFill) hpFill.style.width = "100%";
}

function brock()    { carregarLider(0,  'assets/img/brock.jpg',    '1º Gym',    'Brock');    }
function misty()    { carregarLider(1,  'assets/img/misty.jpg',    '2º Gym',    'Misty');    }
function ltSurge()  { carregarLider(2,  'assets/img/lt-surge.jpg', '3º Gym',    'Lt. Surge');}
function erika()    { carregarLider(3,  'assets/img/erika.jpg',    '4º Gym',    'Erika');    }
function koga()     { carregarLider(4,  'assets/img/koga.jpg',     '5º Gym',    'Koga');     }
function sabrina()  { carregarLider(5,  'assets/img/sabrina.jpg',  '6º Gym',    'Sabrina');  }
function blaine()   { carregarLider(6,  'assets/img/blaine.jpg',   '7º Gym',    'Blaine');   }
function giovanni() { carregarLider(7,  'assets/img/giovanni.jpg', '8º Gym',    'Giovanni'); }
function lorelei()  { carregarLider(8,  'assets/img/ltSurge.jpg',  '1º Elite',  'Lorelei');  }
function bruno()    { carregarLider(9,  'assets/img/ltSurge.jpg',  '2º Elite',  'Bruno');    }
function agatha()   { carregarLider(10, 'assets/img/ltSurge.jpg',  '3º Elite',  'Agatha');   }
function lance()    { carregarLider(11, 'assets/img/ltSurge.jpg',  '4º Elite',  'Lance');    }
function blue()     { carregarLider(12, 'assets/img/ltSurge.jpg',  'Champeon',  'Blue');     }
function red()      { carregarLider(13, 'assets/img/red.jpg',      'Mt. Silver','...');      }
