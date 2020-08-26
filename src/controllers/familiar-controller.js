'use strict'

const model = require('../models/familiar-model');

exports.get = (req, res) => {
    model.get(res);
};

exports.getById = (req, res) => {
    const id = parseInt(req.params.idFamiliar);
    model.getById(id, res);
};

exports.post = (req, res) => {
    const familiar = req.body;
    model.create(familiar, res);
};

exports.put = (req, res) => {
    const id = parseInt(req.params.idFamiliar);
    model.update(id, req.body, res);
};

exports.delete = (req, res) => {
    const id = parseInt(req.params.idFamiliar);
    model.delete(id, res);
};