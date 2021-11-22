const express = require('express');
const router = express.Router();

const boxController = require('../app/controllers/BoxController');

//regiterController.index

router.use('/', boxController.index);

module.exports = router;