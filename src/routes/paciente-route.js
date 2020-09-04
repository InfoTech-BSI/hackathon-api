'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/paciente-controller');

router.get('/', controller.get);
router.get('/:idPaciente', controller.getById);
router.post('/', controller.post);
router.put('/:idPaciente', controller.put);
router.delete('/:idPaciente', controller.delete);

router.get('/dashboard', controller.dashboard);

module.exports = router; 