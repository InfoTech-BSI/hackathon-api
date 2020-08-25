'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/endereco-controller');

router.get('/', controller.get);
router.get('/:idEndereco', controller.getById);
router.post('/', controller.post);
router.put('/:idEndereco', controller.put);
router.delete('/:idEndereco', controller.delete);

module.exports = router; 