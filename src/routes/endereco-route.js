'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/endereco-controller');

var cors = require('cors');
router.use(cors());

router.get('/', controller.get);
router.get('/:idEndereco', controller.getById);
router.post('/', controller.post);
router.put('/:idEndereco', controller.put);
router.delete('/:idEndereco', controller.delete);

module.exports = router; 