'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/profissional-controller');

router.get('/', controller.get);
router.get('/:idProfissional', controller.getById);
router.post('/', controller.post);
router.put('/:idProfissional', controller.put);
router.delete('/:idProfissional', controller.delete);

module.exports = router; 