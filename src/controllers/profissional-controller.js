'use strict'

const model = require('../models/profissional-model');

exports.get = (req, res) => {
    model.get(res);
};

exports.getById = (req, res) => {
    const id = parseInt(req.params.idProfissional);
    model.getById(id, res);
};

exports.post = (req, res) => {
    const sinais = req.body;
    model.create(sinais, res);
};

exports.put = (req, res) => {
    const id = parseInt(req.params.idProfissional);
    model.update(id, req.body, res);
};

exports.delete = (req, res) => {
    const id = parseInt(req.params.idProfissional);
    model.delete(id, res);
};