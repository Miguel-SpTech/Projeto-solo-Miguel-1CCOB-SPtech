var database = require("../database/config");

// Busca todos os troféus desbloqueados de um usuário
function buscarTrofeusPorUsuario(idusuario) {
    console.log("ACESSEI O TROFEUS MODEL - function buscarTrofeusPorUsuario():", idusuario);

    var instrucaoSql = `
        SELECT t.idtrofeu, t.nome, t.desc
        FROM trofeus t
        INNER JOIN relacionamento_trofeus rt ON rt.trofeu_idtrofeu = t.idtrofeu
        WHERE rt.usuario_idusuario = ${idusuario};
    `;

    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Registra um troféu desbloqueado para o usuário
function desbloquearTrofeu(idusuario, idTrofeu) {
    console.log("ACESSEI O TROFEUS MODEL - function desbloquearTrofeu():", idusuario, idTrofeu);

    var instrucaoSql = `
        INSERT IGNORE INTO relacionamento_trofeus (usuario_idusuario, trofeu_idtrofeu)
        VALUES (${idusuario}, ${idTrofeu});
    `;

    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTrofeusPorUsuario,
    desbloquearTrofeu
};
