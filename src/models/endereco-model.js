'use strict'

const conexao = require('../database/conexao');

class Endereco {
    create(data, res) {
        const sql = `
                INSERT INTO 
                    endereco (cep, rua, numero, bairro, complemento, cidade, estado) 
                VALUES ('${data.cep}', '${data.rua}', ${data.numero}, '${data.bairro}', '${data.complemento}', '${data.cidade}', '${data.estado}')`;

        conexao.query(sql, data, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(201).json(data);
            }
        });
    }

    get(res) {
        const sql = `SELECT * FROM endereco`;

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
                    endereco 
                WHERE 
                    idEndereco = ${id}`;

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
                    endereco 
                SET 
                    cep = '${data.cep}', 
                    rua = '${data.rua}', 
                    numero = ${data.numero},
                    bairro = '${data.bairro}', 
                    complemento = '${data.complemento}', 
                    cidade = '${data.cidade}', 
                    estado = '${data.estado}'
                WHERE 
                    idEndereco = ${id}`;

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
                    endereco 
                WHERE 
                    idEndereco = ${id}`;

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json({ id });
            }
        });
    }
}

module.exports = new Endereco;