var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);

                if (resultado.length == 1) {
                    
                    res.json({
                        idusuario:  resultado[0].idusuario,
                        name:       resultado[0].Name,
                        nickName:   resultado[0].NickName,
                        email:      resultado[0].email,
                        fotoPerfil: resultado[0].FotoPerfil
                    });

                } else if (resultado.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");

                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            })
            .catch(function (erro) {
                console.log("Erro ao autenticar:", erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function cadastrar(req, res) {
    var nome       = req.body.nomeServer;
    var nick       = req.body.nickServer;
    var email      = req.body.emailServer;
    var senha      = req.body.senhaServer;
    var fotoPerfil = req.body.fotoPerfilServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (nick == undefined) {
        res.status(400).send("Seu nick está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (fotoPerfil == undefined) {
        res.status(400).send("Sua foto de perfil está undefined!");
    } else {

        usuarioModel.cadastrar(nome, nick, email, senha, fotoPerfil)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log("Erro ao cadastrar:", erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    autenticar,
    cadastrar
};
