let pokemon = 0;

let button1 = document.getElementById("runButton");
let img1 = document.getElementById("img_1");
let pokemon_name = document.getElementById("pokemonName");
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



async function findPokemon1() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, 
        {method: 'GET', 
        headers: {
        'Content-Type': 'application/json'
    }
    });

    const data = await response.json();
    console.log(data);
    let shinychance = rng(8192,1).toFixed(0);
    if (pokemon > 151) {pokemon = 151};

    if (pokemons[pokemon].canFind == true) {

        if (shinychance == 8192) {
            img1.src = data.sprites.front_shiny;
            pokemon_name.innerHTML = `${pokemons[pokemon].name} ✨`;
        } else {
            img1.src = data.sprites.front_default;
            pokemon_name.innerHTML = `${pokemons[pokemon].name}`;
        }
    }
}

function route1() {
    button1.onclick = route1;
    document.getElementById("spanRoute").innerHTML = `Route 1`
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {pokemons[i].canFind = false}
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {
        if (i == 16 || i == 19) {
            pokemons[i].canFind = true
        }
    }

    
    pokemon = rng(100,1);
    console.log(pokemon)
    if (pokemon < 50) {pokemon = 19}
    else {pokemon = 16}
    
    findPokemon1()

}
function route2() {
    button1.onclick = route2;
    document.getElementById("spanRoute").innerHTML = `Route 2`
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {pokemons[i].canFind = false}
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {
        if (i == 16 || i == 19) {
            pokemons[i].canFind = true
        }
    }

    
    pokemon = rng(100,1);
    console.log(pokemon)
    if (pokemon < 50) {pokemon = 19}
    else {pokemon = 16}
    
    findPokemon1()
}
function route3() {
    button1.onclick = route2;
    document.getElementById("spanRoute").innerHTML = `Route 2`
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {pokemons[i].canFind = false}
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {
        if (i == 16 || i == 19) {
            pokemons[i].canFind = true
        }
    }

    
    pokemon = rng(100,1);
    console.log(pokemon)
    if (pokemon < 50) {pokemon = 19}
    else {pokemon = 16}
    
    findPokemon1()
}
function route4() {
    button1.onclick = route2;
    document.getElementById("spanRoute").innerHTML = `Route 2`
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {pokemons[i].canFind = false}
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {
        if (i == 16 || i == 19) {
            pokemons[i].canFind = true
        }
    }

    
    pokemon = rng(100,1);
    console.log(pokemon)
    if (pokemon < 50) {pokemon = 19}
    else {pokemon = 16}
    
    findPokemon1()
}
function route5() {
    button1.onclick = route2;
    document.getElementById("spanRoute").innerHTML = `Route 2`
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {pokemons[i].canFind = false}
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {
        if (i == 16 || i == 19) {
            pokemons[i].canFind = true
        }
    }

    
    pokemon = rng(100,1);
    console.log(pokemon)
    if (pokemon < 50) {pokemon = 19}
    else {pokemon = 16}
    
    findPokemon1()
}
function route6() {
    button1.onclick = route2;
    document.getElementById("spanRoute").innerHTML = `Route 2`
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {pokemons[i].canFind = false}
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {
        if (i == 16 || i == 19) {
            pokemons[i].canFind = true
        }
    }

    
    pokemon = rng(100,1);
    console.log(pokemon)
    if (pokemon < 50) {pokemon = 19}
    else {pokemon = 16}
    
    findPokemon1()
}
function route7() {}
function route8() {}
function route9() {}
function route10() {}
function route11() {}
function route12() {}
function route13() {}
function route14() {}
function route15() {}
function route16() {}
function route17() {}
function route18() {}
function route19() {}
function route20() {}
function route21() {}
function route22() {}
function route23() {}
function route24() {}
function route25() {}
function mtSilver() {}

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