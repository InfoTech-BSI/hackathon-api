'use strict'

const conexao = require('../database/conexao');

class Contato {
    create(data, res) {
        const sql = `
                INSERT INTO 
                    contato (numero, nome, grauParentesco_idGrauParentesco) 
                VALUES ('${data.numero}', '${data.nome}', '${data.grauParentesco}')`;

        conexao.query(sql, data, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(201).json(data);
            }
        });
    }

    get(res) {
        const sql = `SELECT * FROM contato`;

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
                    contato 
                WHERE 
                    idContato = ${id}`;

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
                    contato 
                SET 
                    numero = '${data.numero}',
                    nome = '${data.nome}',
                    grauParentesco_idGrauParentesco = '${data.grauParentesco}'
                WHERE 
                    idContato = ${id}`;

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
                    contato 
                WHERE 
                    idContato = ${id}`;

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json({ id });
            }
        });
    }
}

module.exports = new Contato;