var pokemonModel = require("../models/pokemonModel");

// Retorna todos os pokemons capturados do usuário
function buscarPokemons(req, res) {
    var idusuario = req.params.idusuario;

    if (idusuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {

        pokemonModel.buscarPokemonsPorUsuario(idusuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("Erro ao buscar pokemons:", erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

// Registra um pokemon capturado
function registrarPokemon(req, res) {
    var idusuario = req.body.idusuario;
    var idPokemon = req.body.idPokemon;

    if (idusuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else if (idPokemon == undefined) {
        res.status(400).send("O id do pokemon está undefined!");
    } else {

        pokemonModel.registrarPokemon(idusuario, idPokemon)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("Erro ao registrar pokemon:", erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    buscarPokemons,
    registrarPokemon
};
