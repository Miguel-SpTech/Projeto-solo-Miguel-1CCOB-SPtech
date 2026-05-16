var trofeusModel = require("../models/trofeusModel");

// Retorna todos os troféus desbloqueados do usuário
function buscarTrofeus(req, res) {
    var idusuario = req.params.idusuario;

    if (idusuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {

        trofeusModel.buscarTrofeusPorUsuario(idusuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("Erro ao buscar troféus:", erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

// Desbloqueia um troféu para o usuário
function desbloquearTrofeu(req, res) {
    var idusuario = req.body.idusuario;
    var idTrofeu  = req.body.idTrofeu;

    if (idusuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else if (idTrofeu == undefined) {
        res.status(400).send("O id do troféu está undefined!");
    } else {

        trofeusModel.desbloquearTrofeu(idusuario, idTrofeu)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("Erro ao desbloquear troféu:", erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    buscarTrofeus,
    desbloquearTrofeu
};
