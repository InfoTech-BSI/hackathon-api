'use strict'

const model = require('../models/unidadeSaude-model');

exports.get = (req, res) => {
    model.get(res);
};

exports.getById = (req, res) => {
    const id = parseInt(req.params.idUnidadeSaude);
    model.getById(id, res);
};

exports.post = (req, res) => {
    const unidadeSaude = req.body;
    model.create(unidadeSaude, res);
};

exports.put = (req, res) => {
    const id = parseInt(req.params.idUnidadeSaude);
    model.update(id, req.body, res);
};

exports.delete = (req, res) => {
    const id = parseInt(req.params.idUnidadeSaude);
    model.delete(id, res);
};