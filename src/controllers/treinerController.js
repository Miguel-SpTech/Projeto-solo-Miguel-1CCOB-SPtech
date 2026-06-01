var treinerModel = require("../models/treinerModel");

function buscarTreiner(req, res) {
    var idusuario = req.params.idusuario;

    if (idusuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {
        treinerModel.buscarTreiner(idusuario)
            .then(function(resultado) {
                if (resultado.length == 1) {
                    res.json(resultado[0]);
                } else {
                    res.status(404).send("Treiner não encontrado para esse usuário.");
                }
            })
            .catch(function(erro) {
                console.log("Erro ao buscar treiner:", erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function atualizarTreiner(req, res) {
    var idusuario       = req.body.idusuario;
    var pokedex         = req.body.pokedex;
    var catchMultiplier = req.body.catchMultiplier;
    var TrainerDamage   = req.body.TrainerDamage;
    var TrainerLife     = req.body.TrainerLife;
    var Badges          = req.body.Badges;
    var Elite           = req.body.Elite;
    var Champeon        = req.body.Champeon;
    var qtdPokeballs    = req.body.qtdPokeballs;

    if (idusuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {
        treinerModel.atualizarTreiner(idusuario, pokedex, catchMultiplier, TrainerDamage, TrainerLife, Badges, Elite, Champeon, qtdPokeballs)
            .then(function(resultado) {
                res.json(resultado);
            })
            .catch(function(erro) {
                console.log("Erro ao atualizar treiner:", erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    buscarTreiner,
    atualizarTreiner
};
