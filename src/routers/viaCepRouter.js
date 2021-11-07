const express = require('express');
const { cepController } = require('../controllers/viaCepController');

const router = express.Router();

router.get('/', cepController);

module.exports = router;
