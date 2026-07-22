var express = require("express");
var router  = express.Router();

var pokemonController = require("../controllers/pokemonController");

router.get("/:idusuario", function (req, res) {
    pokemonController.buscarPokemons(req, res);
});

router.post("/registrar", function (req, res) {
    pokemonController.registrarPokemon(req, res);
});

module.exports = router;
