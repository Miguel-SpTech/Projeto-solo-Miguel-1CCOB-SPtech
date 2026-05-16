let routes = {
    "route1": function route1() {
                button1.onclick = route1;
                route = 1;
                document.getElementById("spanRoute").innerHTML = `Route 1`
                for (let i = 151 ; pokemons[i].id > 0 ; i--) {pokemons[i].canFind = false}
                for (let i = 151 ; pokemons[i].id > 0 ; i--) {
                    if (i == 16 || i == 19) {
                        pokemons[i].canFind = true
                    }
                }

    
                pokemon = rng(100,1);
                console.log(pokemon)
                if (pokemon <= 50) {pokemon = 19}
                else {pokemon = 16}
    
                findPokemon1()

                },

"route2":function route2() {
    button1.onclick = route2;
    route = 2
    document.getElementById("spanRoute").innerHTML = `Route 2`
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {pokemons[i].canFind = false}
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {
        if (i == 16 || i == 19 || i == 10 || i == 13) {
            pokemons[i].canFind = true
        }
    }

    
    pokemon = rng(100,1);
    console.log(pokemon)
    if (pokemon <= 45) {pokemon = 19}
    else if(pokemon <= 90) {pokemon = 16}
    else if(pokemon <= 95) {pokemon = 10}
    else {pokemon = 13}
    
    findPokemon1()
},

"route3":function route3() {
    button1.onclick = route3;
    route = 3;
    document.getElementById("spanRoute").innerHTML = `Route 3`
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {pokemons[i].canFind = false}
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {
        if (i == 16 || i == 19 || i == 21 || i == 29 || i == 32) {
            pokemons[i].canFind = true
        }
    }

    
    pokemon = rng(100,1);
    console.log(pokemon)
    if (pokemon <= 35) {pokemon = 16}
    else if(pokemon <= 60) {pokemon = 19}
    else if(pokemon <= 85) {pokemon = 21}
    else if(pokemon <= 93) {pokemon = 29}
    else {pokemon = 32}
    
    findPokemon1()
},

"route4":function route4() {
    button1.onclick = route4;
    route = 4;
    document.getElementById("spanRoute").innerHTML = `Route 4`
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {pokemons[i].canFind = false}
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {
        if (i == 16 || i == 21) {
            pokemons[i].canFind = true
        }
    }

    
    pokemon = rng(100,1);
    console.log(pokemon)
    if (pokemon <= 55) {pokemon = 16}
    else {pokemon = 21}
    
    findPokemon1()
},
"route5":function route5() {
    button1.onclick = route5;
    route = 5
    document.getElementById("spanRoute").innerHTML = `Route 5`
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {pokemons[i].canFind = false}
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {
        if (i == 16 || i == 52|| i == 43 || i == 69) {
            pokemons[i].canFind = true
        }
    }

    
    pokemon = rng(100,1);
    console.log(pokemon)
    if (pokemon <= 40) {pokemon = 16}
    else if(pokemon <= 80){pokemon = 52}
    else if(pokemon<=90){pokemon = 43}
    else {pokemon = 69}
    
    findPokemon1()
},
"route6":function route6() {
    button1.onclick = route6;
    route = 6;
    document.getElementById("spanRoute").innerHTML = `Route 6`
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {pokemons[i].canFind = false}
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {
        if (i == 16 || i == 52|| i == 43 || i == 69) {
            pokemons[i].canFind = true
        }
    }

    
    pokemon = rng(100,1);
    console.log(pokemon)
    if (pokemon <= 40) {pokemon = 16}
    else if(pokemon <= 80){pokemon = 52}
    else if(pokemon<=90){pokemon = 43}
    else {pokemon = 69}
    
    findPokemon1()
},
"route7":function route7() {
    button1.onclick = route7;
    route = 7;
    document.getElementById("spanRoute").innerHTML = `Route 7`
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {pokemons[i].canFind = false}
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {
        if (i == 16 || i == 52|| i == 58 || i == 37) {
            pokemons[i].canFind = true
        }
    }

    
    pokemon = rng(100,1);
    console.log(pokemon)
    if (pokemon <= 30) {pokemon = 16}
    else if(pokemon <= 60){pokemon = 52}
    else if(pokemon<=80){pokemon = 58}
    else {pokemon = 37}
    
    findPokemon1()
},
"route8":function route8() {
    button1.onclick = route8;
    route = 8;
    document.getElementById("spanRoute").innerHTML = `Route 8`
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {pokemons[i].canFind = false}
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {
        if (i == 16 || i == 52|| i == 58 || i == 37) {
            pokemons[i].canFind = true
        }
    }

    
    pokemon = rng(100,1);
    console.log(pokemon)
    if (pokemon <= 30) {pokemon = 16}
    else if(pokemon <= 60){pokemon = 52}
    else if(pokemon<=80){pokemon = 58}
    else {pokemon = 37}
    
    findPokemon1()
},
"route9":function route9() {
    button1.onclick = route9;
    route = 9;
    document.getElementById("spanRoute").innerHTML = `Route 9`
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {pokemons[i].canFind = false}
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {
        if (i == 19 || i == 20 || i == 21 || i == 22 || i == 23 || i == 27) {
            pokemons[i].canFind = true
        }
    }

    
    pokemon = rng(100,1);
    console.log(pokemon)
    if (pokemon <= 30) {pokemon = 19}
    else if(pokemon <= 60) {pokemon = 21}
    else if(pokemon <= 72){pokemon = 23}
    else if (pokemon<=85) {pokemon = 27}
    else if (pokemon <=95){pokemon = 22}
    else {pokemon = 20}
    
    findPokemon1()
},
"route10":function route10() {
    button1.onclick = route10;
    route = 10;
    document.getElementById("spanRoute").innerHTML = `Route 10`
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {pokemons[i].canFind = false}
    for (let i = 151 ; pokemons[i].id > 0 ; i--) {
        if (i == 21 || i == 23 || i == 27 || i == 100) {
            pokemons[i].canFind = true
        }
    }

    
    pokemon = rng(100,1);
    console.log(pokemon)
    if (pokemon <=40) {pokemon = 21}
    else if (pokemon<=55) {pokemon = 23}
    else if(pokemon<=70) {pokemon = 27}
    else {pokemon = 100}
    
    findPokemon1()
},
"route11":function route11() {
    button1.onclick = route11;
    route = 11;
    document.getElementById("spanRoute").innerHTML = `Route 11`
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
},
"route12":function route12() {
    button1.onclick = route12;
    route = 12;
    document.getElementById("spanRoute").innerHTML = `Route 12`
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
},
"route13":function route13() {
    button1.onclick = route13;
    route = 13;
    document.getElementById("spanRoute").innerHTML = `Route 13`
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
},
"route14":function route14() {
    button1.onclick = route14;
    route = 14;
    document.getElementById("spanRoute").innerHTML = `Route 14`
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
},
"route15":function route15() {
    button1.onclick = route15;
    route = 15;
    document.getElementById("spanRoute").innerHTML = `Route 15`
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
},
"route16":function route16() {
    button1.onclick = route16;
    route = 16;
    document.getElementById("spanRoute").innerHTML = `Route 16`
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
},
"route17":function route17() {
    button1.onclick = route17;
    route = 17;
    document.getElementById("spanRoute").innerHTML = `Route 17`
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
},
"route18":function route18() {
    button1.onclick = route18;
    route = 18;
    document.getElementById("spanRoute").innerHTML = `Route 18`
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
},
"route19":function route19() {
    button1.onclick = route19;
    route = 19;
    document.getElementById("spanRoute").innerHTML = `Route 19`
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
},
"route20":function route20() {
    button1.onclick = route20;
    route = 20;
    document.getElementById("spanRoute").innerHTML = `Route 20`
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
},
"route21":function route21() {
    button1.onclick = route21;
    route = 21;
    document.getElementById("spanRoute").innerHTML = `Route 21`
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
},
"route22":function route22() {
    button1.onclick = route22;
    route = 22;
    document.getElementById("spanRoute").innerHTML = `Route 22`
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
},
"route23":function route23() {
    button1.onclick = route23;
    route = 23;
    document.getElementById("spanRoute").innerHTML = `Route 23`
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
},
"route24":function route24() {
    button1.onclick = route24;
    route = 24;
    document.getElementById("spanRoute").innerHTML = `Route 24`
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
},
"route25":function route25() {
    button1.onclick = route25;
    route = 25;
    document.getElementById("spanRoute").innerHTML = `Route 25`
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
}