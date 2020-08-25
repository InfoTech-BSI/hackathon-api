'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/familiar-controller');

router.get('/', controller.get);
router.get('/:idFamiliar', controller.getById);
router.post('/', controller.post);
router.put('/:idFamiliar', controller.put);
router.delete('/:idFamiliar', controller.delete);

module.exports = router; 