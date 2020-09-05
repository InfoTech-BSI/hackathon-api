'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/familiar-controller');

var cors = require('cors');
router.use(cors());

router.get('/', controller.get);
router.get('/:idFamiliar', controller.getById);
router.post('/', controller.post);
router.put('/:idFamiliar', controller.put);
router.delete('/:idFamiliar', controller.delete);

module.exports = router; 