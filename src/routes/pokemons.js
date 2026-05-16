var express = require("express");
var router  = express.Router();

var pokemonController = require("../controllers/pokemonController");

// GET /pokemons/:idusuario  → retorna todos os pokemons capturados do usuário
router.get("/:idusuario", function (req, res) {
    pokemonController.buscarPokemons(req, res);
});

// POST /pokemons/registrar  → salva um novo pokemon capturado
router.post("/registrar", function (req, res) {
    pokemonController.registrarPokemon(req, res);
});

module.exports = router;
