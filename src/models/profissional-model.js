'use strict'

const conexao = require('../database/conexao');

const crypto = require('../utils/crypto');

class Profissional {
    create(data, res) {
        const sql = `
                INSERT INTO 
                    profissional (
                        nome, 
                        email, 
                        tipoPerfil, 
                        senha, 
                        unidadesSaude_idUnidadesSaude
                    ) 
                VALUES (
                    '${data.nome}', 
                    '${data.email}', 
                    '${data.tipoPefil}', 
                    '${crypto.criptografar(data.senha)}', 
                    ${data.idUnidadeSaude})`;

        conexao.query(sql, data, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(201).json(data);
            }
        });
    }

    get(res) {
        const sql = `SELECT * FROM profissional`;

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
                    profissional 
                WHERE 
                    idProfissional = ${id}`;

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
                    profissional 
                SET 
                    nome = '${data.nome}', 
                    email = '${data.email}', 
                    tipoPerfil = '${data.tipoPefil}', 
                    senha = '${crypto.criptografar(data.senha)}', 
                    unidadesSaude_idUnidadesSaude = ${data.idUnidadeSaude}
                WHERE 
                    idProfissional = ${id}`;

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
                    profissional 
                WHERE 
                    idProfissional = ${id}`;

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json({ id });
            }
        });
    }
}

module.exports = new Profissional;