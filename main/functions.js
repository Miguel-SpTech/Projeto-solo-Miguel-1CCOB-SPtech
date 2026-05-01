


let player = {
    "nick": "",
    "pokedex": 0,
    "catchMultiplier": 1,
    "damage":1,
    "life":10,
    "badges":0,
    "champeon":false,
    "qtdPokeball":10,

}

document.getElementById("msm_qtdPokeball").innerHTML = `Quantidade de Pokebolas: ${player.qtdPokeball}`;

console.log(pokemons)

function rng(max,min) {
    let random = Math.random() * (max - min + 1) + min;
    console.log(random);
    return random;
}

function oldShinyChnace() {
    let shinychance = rng(8192,1).toFixed(0);
    return shinychance
}

function newShinyChance() {
    let shinychance = rng(4096,1).toFixed(0);
    return shinychance
}

function findPokemon1() {
    let finded = rng(151,1).toFixed(0);
    return finded
}



async function runPoke() {

    let pokemon = findPokemon1();
    let gotShiny = oldShinyChnace();
    let img1 = document.getElementById("img_1");
    let pokemon_name = document.getElementById("pokemonName");


    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, 
        {method: 'GET', 
        headers: {
        'Content-Type': 'application/json'
    }
    });

    const data = await response.json();
    console.log(data);
    if (gotShiny == 8192) {
        img1.src = data.sprites.front_shiny;
        pokemon_name.innerHTML = `${pokemons[pokemon].name} ✨`
    } else {
        img1.src = data.sprites.front_default;
        pokemon_name.innerHTML = `${pokemons[pokemon].name}`
    }

    

}

function battlePoke() {

    player.qtdPokeball = player.qtdPokeball + 1;
    document.getElementById("msm_qtdPokeball").innerHTML = `Quantidade de Pokebolas: ${player.qtdPokeball}`
    finded()

}

function catchPoke() {
    
    player.qtdPokeball = player.qtdPokeball - 1;
    document.getElementById("msm_qtdPokeball").innerHTML = `Quantidade de Pokebolas: ${player.qtdPokeball}`
    finded()

}

function catchRate() {
    finded();
    let actionCatch = rng(255,1);
    



}