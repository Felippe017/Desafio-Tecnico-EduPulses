const express = require('express');
const { fiboController } = require('../controllers/fiboController');

const router = express.Router();

router.post('/', fiboController);

module.exports = router;
