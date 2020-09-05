'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/unidadeSaude-controller');

var cors = require('cors');
router.use(cors());

router.get('/', controller.get);
router.get('/:idUnidadeSaude', controller.getById);
router.post('/', controller.post);
router.put('/:idUnidadeSaude', controller.put);
router.delete('/:idUnidadeSaude', controller.delete);

module.exports = router; 