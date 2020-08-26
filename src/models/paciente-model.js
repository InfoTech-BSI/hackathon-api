'use strict'

const conexao = require('../database/conexao');
//https://viacep.com.br/ws/17580000/json/

class Paciente {
    create(data, res) {
        const sql = `
                INSERT INTO 
                    paciente (
                        nome, 
                        dataNascimento, 
                        CNS, 
                        dataObito, 
                        isolamentoAte, 
                        dataInicioSintomas,
                        dataColetaExame,
                        tipoConvenio,
                        tipoExame, 
                        dataResultadoExame,
                        resultadoExame,
                        grupoRisco,
                        dataLigacao,
                        horaLigacao,
                        emIsolamento,
                        orientacao,
                        apetite,
                        observacoesGerais,
                        conduta,
                        endereco_idEndereco,
                        Contato_idContato,
                        comorbidades_idComorbidades,
                        sinais_idSinais
                        ) 
                VALUES (
                    '${data.nome}', 
                    '${data.dataNascimento}', 
                    '${data.CNS}',
                    '${data.dataObito}',
                    '${data.isolamentoAte}',
                    '${data.dataInicioSintomas}',
                    '${data.dataColetaExame}',
                    '${data.tipoConvenio}',
                    '${data.tipoExame}',
                    '${data.dataResultadoExame}',
                    '${data.resultadoExame}',
                    '${data.grupoRisco}',
                    '${data.dataLigacao}',
                    '${data.horaLigacao}', 
                    '${data.emIsolamento}',
                    '${data.orientacao}',
                    '${data.apetite}',
                    '${data.observacoesGerais}',
                    '${data.conduta}',
                    '${data.endereco_idEndereco}',
                    '${data.Contato_idContato}',
                    '${data.comorbidades_idComorbidades}',
                    '${data.sinais_idSinais}'
                    )`;

        conexao.query(sql, data, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(201).json(data);
            }
        });
    }

    get(res) {
        const sql = `SELECT * FROM paciente`;

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        });
    }

    getById(id, res) {
        const sql = `
                SELECT * FROM 
                    paciente 
                WHERE 
                    idPaciente = ${id}`;

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados[0]);
            }
        });
    }

    update(id, data, res) {
        const sql = `
                UPDATE 
                    paciente 
                SET 
                    nome = '${data.nome}', 
                    dataNascimento = '${data.dataNascimento}', 
                    CNS = '${data.CNS}',
                    dataObito = '${data.dataObito}',
                    isolamentoAte = '${data.isolamentoAte}',
                    dataInicioSintomas = '${data.dataInicioSintomas}',
                    dataColetaExame = '${data.dataColetaExame}',
                    tipoConvenio = '${data.tipoConvenio}',
                    tipoExame= '${data.tipoExame}',
                    dataResultadoExame = '${data.dataResultadoExame}',
                    resultadoExame = '${data.resultadoExame}',
                    grupoRisco = '${data.grupoRisco}',
                    emIsolamento = '${data.emIsolamento}',
                    orientacao = '${data.orientacao}',
                    orientacao = '${data.apetite}',
                    observacoesGerais = '${data.observacoesGerais}',
                    conduta = '${data.conduta}',
                    endereco_idEndereco = '${data.endereco_idEndereco}',
                    Contato_idContato = '${data.Contato_idContato}',
                    comorbidades_idComorbidades = '${data.comorbidades_idComorbidades}',
                    sinais_idSinais = '${data.sinais_idSinais}'
                WHERE 
                    idPaciente = ${id}`;

        conexao.query(sql, [id, data], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(data);
            }
        });
    }

    delete(id, res) {
        const sql = `
                DELETE FROM 
                    paciente 
                WHERE 
                    idPaciente = ${id}`;

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json({ id });
            }
        });
    }
}

module.exports = Paciente;