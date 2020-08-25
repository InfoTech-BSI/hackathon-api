'use strict'

const conexao = require('../database/conexao');

class Sinais {
    create(data, res) {
        const sql = `
                INSERT INTO 
                    familiar (nomeFamiliar, sintomaticoFamiliar, exameFamiliar, paciente_idPaciente) 
                VALUES ('${data.nomeFamiliar}', '${data.sintomaticoFamiliar}', '${data.exameFamiliar}', ${data.idPaciente})`;

        conexao.query(sql, data, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(201).json(data);
            }
        });
    }

    get(res) {
        const sql = `SELECT * FROM familiar`;

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
                    familiar 
                WHERE 
                    idFamiliar = ${id}`;

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
                    familiar 
                SET 
                    nomeFamiliar = '${data.nomeFamiliar}', 
                    sintomaticoFamiliar = '${data.sintomaticoFamiliar}', 
                    exameFamiliar = '${data.exameFamiliar}', 
                    paciente_idPaciente = ${data.idPaciente}
                WHERE 
                    idFamiliar = ${id}`;

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
                    familiar 
                WHERE 
                    idFamiliar = ${id}`;

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json({ id });
            }
        });
    }
}

module.exports = new Sinais;