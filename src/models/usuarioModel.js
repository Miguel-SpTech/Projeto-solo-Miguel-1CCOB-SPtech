var database = require("../database/config");

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL - function autenticar():", email, senha);

    var instrucaoSql = `
        SELECT idusuario, Name, NickName, email, FotoPerfil
        FROM usuario
        WHERE email = '${email}' AND senha = '${senha}';
    `;

    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(Name, NickName, email, senha, FotoPerfil) {
    console.log("ACESSEI O USUARIO MODEL - function cadastrar():", Name, NickName, email, senha, FotoPerfil);

    var instrucaoSql = `
        INSERT INTO usuario (Name, NickName, email, senha, FotoPerfil)
        VALUES ('${Name}', '${NickName}', '${email}', '${senha}', '${FotoPerfil}');
    `;

    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};
