'use strict'

const conexao = require('../database/conexao');

class UnidadeSaude {
    create(data, res) {
        const sql = `
                INSERT INTO 
                    unidadeSaude (nome, sintomatica, endereco_idEndereco) 
                VALUES ('${data.nome}', '${data.sintomatica}', ${data.endereco})`;

        conexao.query(sql, data, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(201).json(data);
            }
        });
    }

    get(res) {
        const sql = `SELECT * FROM unidadeSaude`;

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
                    unidadeSaude 
                WHERE 
                    idUnidadeSaude = ${id}`;

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
                    unidadeSaude 
                SET 
                    nome = '${data.nome}', 
                    sintomatica = '${data.sintomatica}', 
                    endereco_idEndereco = ${data.endereco}
                WHERE 
                    idUnidadeSaude = ${id}`;

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
                    unidadeSaude 
                WHERE 
                    idUnidadeSaude = ${id}`;

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json({ id });
            }
        });
    }
}

module.exports = new UnidadeSaude;