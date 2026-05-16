var express = require("express");
var router  = express.Router();

var trofeusController = require("../controllers/trofeusController");

// GET /trofeus/:idusuario  → retorna todos os troféus desbloqueados do usuário
router.get("/:idusuario", function (req, res) {
    trofeusController.buscarTrofeus(req, res);
});

// POST /trofeus/desbloquear  → salva um troféu desbloqueado
router.post("/desbloquear", function (req, res) {
    trofeusController.desbloquearTrofeu(req, res);
});

module.exports = router;
