'use strict'

const model = require('../models/paciente-model');

exports.get = (req, res) => {
    model.get(res);
};

exports.getById = (req, res) => {
    const id = parseInt(req.params.idPaciente);
    model.getById(id, res);
};

exports.post = (req, res) => {
    const paciente = req.body;
    model.create(paciente, res);
};

exports.put = (req, res) => {
    const id = parseInt(req.params.idPaciente);
    model.update(id, req.body, res);
};

exports.delete = (req, res) => {
    const id = parseInt(req.params.idPaciente);
    model.delete(id, res);
};

exports.dashboard = (req, res) => {
    model.dashboard(res);
}