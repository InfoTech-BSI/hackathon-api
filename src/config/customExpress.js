'use strict'

//configurar o express
const express = require('express');
//const consign = require('consign');
const bodyParser = require('body-parser');

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