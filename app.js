// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors    = require("cors");
var path    = require("path");

var PORTA_APP = process.env.APP_PORT;
var HOST_APP  = process.env.APP_HOST;

var app = express();

// ─── Rotas ────────────────────────────────────────────────────────────────────
var indexRouter    = require("./src/routes/index");
var usuarioRouter  = require("./src/routes/usuarios");
var pokemonRouter  = require("./src/routes/pokemons");
var trofeusRouter  = require("./src/routes/trofeus");
var treinersRouter = require("./src/routes/treiners");

// ─── Middlewares ──────────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// ─── Endereços da API ─────────────────────────────────────────────────────────
app.use("/",          indexRouter);
app.use("/usuarios",  usuarioRouter);
app.use("/pokemons",  pokemonRouter);
app.use("/trofeus",   trofeusRouter);
app.use("/treiners",  treinersRouter);

// ─── Iniciar servidor ─────────────────────────────────────────────────────────
app.listen(PORTA_APP, function () {
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  
    \n\n\n
    Servidor rodando! Acesse: http://${HOST_APP}:${PORTA_APP} \n\n
    Ambiente: ${process.env.AMBIENTE_PROCESSO} \n\n`);
});
