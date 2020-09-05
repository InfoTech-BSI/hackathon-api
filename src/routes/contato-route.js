'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/contato-controller');

var cors = require('cors');
router.use(cors());

router.get('/', controller.get);
router.get('/:idContato', controller.getById);
router.post('/', controller.post);
router.put('/:idContato', controller.put);
router.delete('/:idContato', controller.delete);

module.exports = router; 