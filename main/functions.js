let qtdPokeball = 10
document.getElementById("msm_qtdPokeball").innerHTML = `Quantidade de Pokebolas: ${qtdPokeball}`

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

async function finded() {
    let finded = findPokemon1();
    let gotShiny = oldShinyChnace();
    let img1 = document.getElementById("img_1")


    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${finded}`, 
        {method: 'GET', 
        headers: {
        'Content-Type': 'application/json'
    }
    });

    const data = await response.json();
    console.log(data);
    
    if (gotShiny == 8192) {
        img1.src = data.sprites.front_shiny;
    } else {
        img1.src = data.sprites.front_default;
    }

}

function runPoke() {

}

function battlePoke() {

}

function catchPoke() {

}