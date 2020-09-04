'use strict'

const salt_key = "b7b1dc541ba98a721295e3d2a9079e7a"; //covid19
const md5 = require('md5');

const teste = require('./pontuacaoPaciente');

exports.criptografar = (senha) => {
    return md5(senha + salt_key);
};