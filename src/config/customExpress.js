'use strict'

//configurar o express
const express = require('express');
//const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');

//Carregar as rotas
const comorbidadeRoute = require('../routes/comorbidade-route');
const contatoRoute = require('../routes/contato-route');
const enderecoRoute = require('../routes/endereco-route');
const familiarRoute = require('../routes/familiar-route');
const grauParentescoRoute = require('../routes/grauParentesco-route');
const pacienteRoute = require('../routes/paciente-route');
const profissionalRoute = require('../routes/profissional-route');
const sinaisRoute = require('../routes/sinais-route');
const unidadeSaudeRoute = require('../routes/unidadeSaude-route');

module.exports = () => {
    const app = express(); 

    //Habilita o CORS
    app.use(cors());
    app.options('*', cors());
    app.use(function(req, res, next){
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Headers', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
    });
    
    app.use(bodyParser.urlencoded({ 
        extended: false
    }));
    app.use(bodyParser.json());

    app.use('/comorbidade', comorbidadeRoute);
    app.use('/contato', contatoRoute);
    app.use('/endereco', enderecoRoute);
    app.use('/familiar', familiarRoute);
    app.use('/grauParentesco', grauParentescoRoute);
    app.use('/paciente', pacienteRoute);
    app.use('/profissional', profissionalRoute);
    app.use('/sinais', sinaisRoute);
    app.use('/unidadeSaude', unidadeSaudeRoute);

    //carregar automaticamente os controllers
    // consign() 
    //     .include('controllers')
    //     .into(app);

    return app;
}