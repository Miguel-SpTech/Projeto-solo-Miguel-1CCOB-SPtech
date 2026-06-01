var database = require("../database/config");

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL - autenticar():", email);

    var instrucaoSql = `
        SELECT idusuario, Name, NickName, email, FotoPerfil
        FROM usuario
        WHERE email = '${email}' AND senha = '${senha}';
    `;

    return database.executar(instrucaoSql);
}

function cadastrar(Name, NickName, email, senha, FotoPerfil) {
    console.log("ACESSEI O USUARIO MODEL - cadastrar():", Name, NickName);

    var sqlUsuario = `
        INSERT INTO usuario (Name, NickName, email, senha, FotoPerfil)
        VALUES ('${Name}', '${NickName}', '${email}', '${senha}', '${FotoPerfil}');
    `;

    return database.executar(sqlUsuario)
        .then(function(resultado) {
            var novoId = resultado.insertId;
            console.log("Usuário criado com id:", novoId, "— criando Treiner...");

            var sqlTreiner = `
                INSERT INTO Treiners 
                    (usuario_idusuario, pokedex, catchMultiplier, TrainerDamage, TrainerLife, Badges, Elite, Champeon, qtdPokeballs)
                VALUES 
                    (${novoId}, 0, 1, 1, 10, 0, 0, 'false', 10);
            `;

            return database.executar(sqlTreiner);
        });
}

module.exports = {
    autenticar,
    cadastrar
};
