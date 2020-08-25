'use strict'

const model = require('../models/sinais-model');

//outra maneira - caso usar o consign (chamar o controller direto)
// module.exports = app => {
//     app.get('/sinais', (req, res) => {
//         model.get(res);
// }

exports.get = (req, res) => { 
    model.get(res);
}

exports.getById = (req, res) => {
    const id = parseInt(req.params.idSinais);
    model.getById(id, res);
}

exports.post = (req, res) => {
    const sinais = req.body;
    model.create(sinais, res);
}

exports.put = (req, res) => {
    const id = parseInt(req.params.idSinais);
    model.update(id, req.body, res);
}

exports.delete = (req, res) => {
    const id = parseInt(req.params.idSinais);
    model.delete(id, res);
}