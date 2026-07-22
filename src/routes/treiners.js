var express = require("express");
var router  = express.Router();

var treinerController = require("../controllers/treinerController");

router.get("/:idusuario", function(req, res) {
    treinerController.buscarTreiner(req, res);
});

router.post("/atualizar", function(req, res) {
    treinerController.atualizarTreiner(req, res);
});

module.exports = router;
