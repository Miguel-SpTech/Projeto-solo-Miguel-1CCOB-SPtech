var express = require("express");
var router  = express.Router();

var treinerController = require("../controllers/treinerController");

// GET /treiners/:idusuario → retorna os dados do treiner daquele jogador
router.get("/:idusuario", function(req, res) {
    treinerController.buscarTreiner(req, res);
});

// POST /treiners/atualizar → salva o estado atual do jogador
router.post("/atualizar", function(req, res) {
    treinerController.atualizarTreiner(req, res);
});

module.exports = router;
