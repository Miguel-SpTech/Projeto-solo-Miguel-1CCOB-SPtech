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
let pokelife = 0;
 
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
 
// ──────────────────────────────────────────────────────────────────────
function updateData() {
    document.getElementById("msm_qtdPokeball").innerHTML = `Quantidade de Pokebolas: ${player.qtdPokeball}`;
    document.getElementById("H3life").innerHTML = `Life: ${player.life}`;
    document.getElementById("H3damage").innerHTML = `Damage: ${player.damage}`;
}
 
setInterval(updateData, 1000);
 
// ─────────────────────────────────────────────────────────────────────────
async function updatePokedex() {
    console.log("Pokedex Update started");
 
    for (let p = 1; p < 152; p++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${p}`);
        const data     = await response.json();
 
        if (pokemons[p].registered == true) {
            if (pokemons[p].shinyregistered == true) {
                document.getElementById(`pokedexN${p}`).src          = data.sprites.front_shiny;
                document.getElementById(`spanPokedexN${p}`).innerHTML = pokemons[p].name;
            } else {
                document.getElementById(`pokedexN${p}`).src          = data.sprites.front_default;
                document.getElementById(`spanPokedexN${p}`).innerHTML = pokemons[p].name;
            }
        }
    }
 
    console.log("Pokedex Update finished");
}
 
setInterval(updatePokedex, 10000);
 
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
 
    pokelife = pokemons[pokemon].life;
 
    if (pokemons[pokemon].canFind == true) {
        if (shinychance >= 8192) {
            img1.src          = data.sprites.versions['generation-v']['black-white'].animated.front_shiny;
            pokemon_name.innerHTML = `${pokemons[pokemon].name} ✨`;
        } else {
            img1.src          = data.sprites.versions['generation-v']['black-white'].animated.front_default;
            pokemon_name.innerHTML = `${pokemons[pokemon].name}`;
        }
    }
}