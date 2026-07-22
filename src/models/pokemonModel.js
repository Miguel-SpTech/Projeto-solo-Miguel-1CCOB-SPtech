var database = require("../database/config");

function buscarPokemonsPorUsuario(idusuario) {
    console.log("ACESSEI O POKEMON MODEL - function buscarPokemonsPorUsuario():", idusuario);

    var instrucaoSql = `
        SELECT p.id, p.Name
        FROM pokemons p
        INNER JOIN relacionamento_pokemon rp ON rp.pokemons_id = p.id
        WHERE rp.usuario_idusuario = ${idusuario};
    `;

    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarPokemon(idusuario, idPokemon) {
    console.log("ACESSEI O POKEMON MODEL - function registrarPokemon():", idusuario, idPokemon);

    var instrucaoSql = `
        INSERT IGNORE INTO relacionamento_pokemon (usuario_idusuario, pokemons_id)
        VALUES (${idusuario}, ${idPokemon});
    `;

    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPokemonsPorUsuario,
    registrarPokemon
};
