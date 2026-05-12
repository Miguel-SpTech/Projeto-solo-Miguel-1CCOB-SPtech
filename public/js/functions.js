let pokemon = 0;
var route = 1;
let pokelife = pokemons[pokemon].life;


let button1 = document.getElementById("runButton");
let img1 = document.getElementById("img_1");
let pokemon_name = document.getElementById("pokemonName");
let player = {
    "pokedex": 0,
    "catchMultiplier": 1,
    "damage":1,
    "life":10,
    "badges":0,
    "elite":0,
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

// async function updateData() {
//     console.log("Update started");

//     document.getElementById("msm_qtdPokeball").innerHTML = `Quantidade de Pokebolas: ${player.qtdPokeball}`;
//     document.getElementById(`H3life`).innerHTML = `Life: ${player.life}`;
//     document.getElementById(`H3damage`).innerHTML = `Damage: ${player.damage}`;
    
//     for(let p = 1 ; p < 152; p++) {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${p}`, 
//         {method: 'GET', 
//         headers: {
//         'Content-Type': 'application/json'
//         }
//         });

//     const data = await response.json();

//         if (pokemons[p].registered == true) {
//             if(pokemons[p].shinyregistered == true) {
//                 document.getElementById(`pokedexN${p}`).src = data.sprites.front_shiny;
//                 // document.getElementById(`pokeNameN${p}`).innerHTML = pokemons[p].name;
//             } else {
//                 document.getElementById(`pokedexN${p}`).src = data.sprites.front_default;
//                 // document.getElementById(`pokeNameN${p}`).innerHTML = pokemons[p].name;
//             }
//         };
        
//     }
    
//     console.log("Update finished");
// }

// setInterval(updateData, 10000);

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



function run() {
    routes["route" + route]();
}

function battlePoke() {

    if (pokelife > 0) {
        pokelife -= player.damage;
        document.getElementById("life").style.width = pokelife + "%";
        console.log(pokelife)
    }
    if (pokelife > 0) {
        player.life -= pokemons[pokemon].damage
    } else {
        player.qtdPokeball = player.qtdPokeball + 1;
        run();
    }
    
    
    

}

function catchPoke() {
    
    player.qtdPokeball = player.qtdPokeball - 1;
    run();

}

function catchRate() {
    let actionCatch = rng(255,1);
}