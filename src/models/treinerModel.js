var database = require("../database/config");

function buscarTreiner(idusuario) {
    console.log("ACESSEI O TREINER MODEL - function buscarTreiner():", idusuario);

    var instrucaoSql = `
        SELECT usuario_idusuario, pokedex, catchMultiplier, TrainerDamage, TrainerLife, Badges, Elite, Champeon, qtdPokeballs
        FROM Treiners
        WHERE usuario_idusuario = ${idusuario};
    `;

    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarTreiner(idusuario, pokedex, catchMultiplier, TrainerDamage, TrainerLife, Badges, Elite, Champeon, qtdPokeballs) {
    console.log("ACESSEI O TREINER MODEL - function atualizarTreiner():", idusuario);

    var instrucaoSql = `
        UPDATE Treiners
        SET
            pokedex         = ${pokedex},
            catchMultiplier = ${catchMultiplier},
            TrainerDamage   = ${TrainerDamage},
            TrainerLife     = ${TrainerLife},
            Badges          = ${Badges},
            Elite           = ${Elite},
            Champeon        = '${Champeon}',
            qtdPokeballs    = ${qtdPokeballs}
        WHERE usuario_idusuario = ${idusuario};
    `;

    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTreiner,
    atualizarTreiner
};
