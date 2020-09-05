'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/profissional-controller');

var cors = require('cors');
router.use(cors());

router.get('/', controller.get);
router.get('/:idProfissional', controller.getById);
router.post('/', controller.post);
router.put('/:idProfissional', controller.put);
router.delete('/:idProfissional', controller.delete);
router.post('/login/', controller.logIn);

module.exports = router; 