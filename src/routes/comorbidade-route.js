'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/comorbidade-controller');

router.get('/', controller.get);
router.get('/:idComorbidade', controller.getById);
router.post('/', controller.post);
router.put('/:idComorbidade', controller.put);
router.delete('/:idComorbidade', controller.delete);

module.exports = router; 