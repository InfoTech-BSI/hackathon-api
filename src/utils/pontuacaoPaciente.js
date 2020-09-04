'use strict'

const moment = require('moment');
const dataAtual =  moment().format('DD/MM/YYYY');

exports.pontos = (febre, tosse, cansaco, idade) => {
    var idade 
    return febre + tosse + cansaco + idade; 
}

exports.calculoIdade = (nascimento) => {
    var today = new Date();
    var birthDate = new Date(nascimento);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

exports.pontosIdade = (idade) => {
    var pontos = 0;
    if(idade < 30) {
        pontos = 1;
    }
    else if(idade >= 30 && i < 60) {
        pontos = 2;
    }
    else {
        pontos = 3;
    }

    return pontos;
}

exports.conduta = (soma) => {
    var mensagem = "";
    if(soma <= 6) {
        mensagem = "Manter isolamento domiciliar";
    }
    else if(soma > 6 && soma <= 9) {
        mensagem = "Encaminhar paciente a uma unidade sintomática";
    }
    else {
        mensagem = "Encaminhar para o SAMU";
    }

    return mensagem;
}