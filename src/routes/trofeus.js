var express = require("express");
var router  = express.Router();

var trofeusController = require("../controllers/trofeusController");

router.get("/:idusuario", function (req, res) {
    trofeusController.buscarTrofeus(req, res);
});

router.post("/desbloquear", function (req, res) {
    trofeusController.desbloquearTrofeu(req, res);
});

module.exports = router;
