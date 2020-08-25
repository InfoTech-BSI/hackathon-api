'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/sinais-controller');

router.get('/', controller.get);
router.get('/:idSinais', controller.getById);
router.post('/', controller.post);
router.put('/:idSinais', controller.put);
router.delete('/:idSinais', controller.delete);

module.exports = router; 