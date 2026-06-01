// ─────────────────────────────────────────────────────────────────────────────
let idusuario = localStorage.getItem("idusuario");
if (!idusuario) {
    window.location.href = "login.html";
}
 
// ──────────────────────────────────────────────────────────────────────────────
let button1      = document.getElementById("runButton");
let img1         = document.getElementById("img_1");
let pokemon_name = document.getElementById("pokemonName");
 
let pokemon  = 0;
var route    = 1;
let life = 0;
let lifeMax = 0;
 
// ──────────────────────────────────────────────────────────────────────────────
let player = {
    pokedex:         0,
    catchMultiplier: 1,
    damage:          1,
    life:            10,
    badges:          0,
    elite:           0,
    champeon:        false,
    qtdPokeball:     10,
};
 
// ────────────────────────────────────────────────────────────────────────────
fetch(`/treiners/${idusuario}`)
    .then(function(resposta) { return resposta.json(); })
    .then(function(treiner) {
        player.pokedex         = treiner.pokedex;
        player.catchMultiplier = treiner.catchMultiplier;
        player.damage          = treiner.TrainerDamage;
        player.life            = treiner.TrainerLife;
        player.badges          = treiner.Badges;
        player.elite           = treiner.Elite;
        player.champeon        = treiner.Champeon;
        player.qtdPokeball     = treiner.qtdPokeballs;
 
        // ────────────────────────────────────────────────────────────────────
        carregarPokedexDoBanco();
        updateData();
        console.log("Treiner carregado:", treiner);
    })
    .catch(function(erro) {
        console.log("Erro ao carregar treiner:", erro);
    });
 
// ──────────────────────────────────────────────────────────────────────────────
function salvarTreiner() {
    fetch("/treiners/atualizar", {
        method: "POST",
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
    .then(function() { console.log("Treiner salvo no banco."); })
    .catch(function(erro) { console.log("Erro ao salvar treiner:", erro); });
}
 
// ───────────────────────────────────────────────────────────────────────────────
// Busca os pokémons já capturados e marca registered = true no array local
function carregarPokedexDoBanco() {
    fetch(`/pokemons/${idusuario}`)
        .then(function(resposta) { return resposta.json(); })
        .then(function(pokemonsCaptured) {
            pokemonsCaptured.forEach(function(poke) {
                if (pokemons[poke.id]) {
                    pokemons[poke.id].registered = true;
                }
            });
            console.log("Pokédex carregada:", pokemonsCaptured.length, "pokémons registrados.");
        })
        .catch(function(erro) {
            console.log("Erro ao carregar pokédex:", erro);
        });
}
 
// ──────────────────────────────────────────────────────────────────────────────
function carregarTrofeusDoBanco() {
    fetch(`/trofeus/${idusuario}`)
        .then(function(resposta) { return resposta.json(); })
        .then(function(trofeusDesbloqueados) {
            trofeusDesbloqueados.forEach(function(t) {
                if (trophies[t.idtrofeu - 1]) {
                    trophies[t.idtrofeu - 1].unlocked = true;
                }
            });
            console.log("Troféus carregados:", trofeusDesbloqueados.length, "desbloqueados.");
        })
        .catch(function(erro) {
            console.log("Erro ao carregar troféus:", erro);
        });
}
 
// ─────────────────────────────────────────────────────────────────────────

// ──────────────────────────────────────────────────────────────────
function rng(max, min) {
    let random = Math.random() * (max - min + 1) + min;
    return random;
}
 
function run() {
    routes["route" + route]();
}
 
function battlePoke() {
    if (pokelife > 0) {
        pokelife -= player.damage;
        document.getElementById("life").style.width = pokelife + "%";
    }
 
    if (pokelife <= 0) {
        player.qtdPokeball += 1;
        salvarTreiner();
        run();
    } else {
        player.life -= pokemons[pokemon].damage;
    }
}
 
function catchPoke() {
    if (player.qtdPokeball <= 0) {
        alert("Sem pokebolas!");
        return;
    }
 
    let actionCatch   = rng(255, 1).toFixed(0);
    player.qtdPokeball -= 1;
 
    // ── Captura bem-sucedida ──────────────────────────────────────────────────
    if (actionCatch <= pokemons[pokemon].catch_rate * player.catchMultiplier) {
 
        if (!pokemons[pokemon].registered) {
            // 1. Marca localmente
            pokemons[pokemon].registered = true;
            player.pokedex += 1;
 

            registrarPokemonNoBanco(pokemon);
 
        }
 
        salvarTreiner();
    } else {
        salvarTreiner();
    }
 
    run();
}
 
// ─── Registra um pokemon capturado no banco ───────────────────────────────────
function registrarPokemonNoBanco(idPokemon) {
    fetch("/pokemons/registrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            idusuario: idusuario,
            idPokemon: idPokemon
        })
    })
    .then(function() { console.log(`Pokemon ${idPokemon} registrado no banco.`); })
    .catch(function(erro) { console.log("Erro ao registrar pokemon:", erro); });
}
 
// ─── Desbloqueia um troféu no banco e no array local ─────────────────────────
function desbloquearTrofeuNoBanco(idTrofeu) {
    trophies[idTrofeu - 1].unlocked = true;
 
    fetch("/trofeus/desbloquear", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            idusuario: idusuario,
            idTrofeu:  idTrofeu
        })
    })
    .then(function() { console.log(`Troféu ${idTrofeu} desbloqueado no banco.`); })
    .catch(function(erro) { console.log("Erro ao desbloquear troféu:", erro); });
}
 
// ─── Mostra o pokemon encontrado na batalha ───────────────────────────────────
async function findPokemon1() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data     = await response.json();
 
    let shinychance = rng(8192, 1).toFixed(0);
    if (pokemon > 151) { pokemon = 151; }
 
    lifeMax = pokemons[pokemon].life;
    life = pokemons[pokemon].life;
    document.getElementById("hpText").innerHTML = `${life} / ${lifeMax}`
 
    if (pokemons[pokemon].canFind == true) {
        if (shinychance >= 8192) {
            img1.src = data.sprites.versions['generation-v']['black-white'].animated.front_shiny;
            pokemon_name.innerHTML = `${pokemons[pokemon].name} ✨`;
        } else {
            img1.src = data.sprites.versions['generation-v']['black-white'].animated.front_default;
            pokemon_name.innerHTML = `${pokemons[pokemon].name}`;
        }
    }
}

function brock() {
    img1.src = 'assets/img/brock.jpg';
    document.getElementById("spanRoute").innerHTML = "1º Gym";
    lifeMax = lideres[0].maxLife;
    life = lideres[0].life;
    document.getElementById("pokemonName").innerHTML = "Brock";
    document.getElementById("hpText").innerHTML = `${life} / ${lifeMax}`
}

function misty() {
    img1.src = 'assets/img/misty.jpg';
    document.getElementById("spanRoute").innerHTML = "2º Gym"
    lifeMax = lideres[1].maxLife;
    life = lideres[1].life;
    document.getElementById("pokemonName").innerHTML = "Misty";
    document.getElementById("hpText").innerHTML = `${life} / ${lifeMax}`
}

function ltSurge() {
    img1.src = 'assets/img/lt-surge.jpg';
    document.getElementById("spanRoute").innerHTML = "3º Gym"
    lifeMax = lideres[2].maxLife;
    life = lideres[2].life;
    document.getElementById("pokemonName").innerHTML = "lt. Surge";
    document.getElementById("hpText").innerHTML = `${life} / ${lifeMax}`
}

function erika() {
    img1.src = 'assets/img/erika.jpg';
    document.getElementById("spanRoute").innerHTML = "4º Gym"
    lifeMax = lideres[3].maxLife;
    life = lideres[3].life;
    document.getElementById("pokemonName").innerHTML = "Erika";
    document.getElementById("hpText").innerHTML = `${life} / ${lifeMax}`
}

function koga() {
    img1.src = 'assets/img/koga.jpg';
    document.getElementById("spanRoute").innerHTML = "5º Gym"
    lifeMax = lideres[4].maxLife;
    life = lideres[4].life;
    document.getElementById("pokemonName").innerHTML = "Koga";
    document.getElementById("hpText").innerHTML = `${life} / ${lifeMax}`
}

function sabrina() {
    img1.src = 'assets/img/sabrina.jpg';
    document.getElementById("spanRoute").innerHTML = "6º Gym"
    lifeMax = lideres[5].maxLife;
    life = lideres[5].life;
    document.getElementById("pokemonName").innerHTML = "Sabrina";
    document.getElementById("hpText").innerHTML = `${life} / ${lifeMax}`
}

function blaine() {
    img1.src = 'assets/img/blaine.jpg';
    document.getElementById("spanRoute").innerHTML = "7º Gym"
    lifeMax = lideres[6].maxLife;
    life = lideres[6].life;
    document.getElementById("pokemonName").innerHTML = "Blaine";
    document.getElementById("hpText").innerHTML = `${life} / ${lifeMax}`
}

function giovanni() {
    img1.src = 'assets/img/giovanni.jpg';
    document.getElementById("spanRoute").innerHTML = "8º Gym"
    lifeMax = lideres[7].maxLife;
    life = lideres[7].life;
    document.getElementById("pokemonName").innerHTML = "Giovanni";
    document.getElementById("hpText").innerHTML = `${life} / ${lifeMax}`
}

function lorelei() {
    img1.src = 'assets/img/ltSurge.jpg';
    document.getElementById("spanRoute").innerHTML = "1º Elite"
    lifeMax = lideres[8].maxLife;
    life = lideres[8].life;
    document.getElementById("pokemonName").innerHTML = "Lorelei";
    document.getElementById("hpText").innerHTML = `${life} / ${lifeMax}`
}

function bruno() {
    img1.src = 'assets/img/ltSurge.jpg';
    document.getElementById("spanRoute").innerHTML = "2º Elite"
    lifeMax = lideres[9].maxLife;
    life = lideres[9].life;
    document.getElementById("pokemonName").innerHTML = "Bruno";
    document.getElementById("hpText").innerHTML = `${life} / ${lifeMax}`
}

function agatha() {
    img1.src = 'assets/img/ltSurge.jpg';
    document.getElementById("spanRoute").innerHTML = "3º Elite"
    lifeMax = lideres[10].maxLife;
    life = lideres[10].life;
    document.getElementById("pokemonName").innerHTML = "Agatha";
    document.getElementById("hpText").innerHTML = `${life} / ${lifeMax}`
}

function lance() {
    img1.src = 'assets/img/ltSurge.jpg';
    document.getElementById("spanRoute").innerHTML = "4º Elite"
    lifeMax = lideres[11].maxLife;
    life = lideres[11].life;
    document.getElementById("pokemonName").innerHTML = "Lance";
    document.getElementById("hpText").innerHTML = `${life} / ${lifeMax}`
}

function blue() {
    img1.src = 'assets/img/ltSurge.jpg';
    document.getElementById("spanRoute").innerHTML = "Champeon"
    lifeMax = lideres[12].maxLife;
    life = lideres[12].life;
    document.getElementById("pokemonName").innerHTML = "Blue";
    document.getElementById("hpText").innerHTML = `${life} / ${lifeMax}`
}

function red() {
    img1.src = 'assets/img/red.jpg';
    document.getElementById("spanRoute").innerHTML = "Mt. Silver"
    lifeMax = lideres[13].maxLife;
    life = lideres[13].life;
    document.getElementById("pokemonName").innerHTML = "...";
    document.getElementById("hpText").innerHTML = `${life} / ${lifeMax}`
}