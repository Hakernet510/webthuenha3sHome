const express = require('express');
const router = express.Router();

const registerController = require('../app/controllers/RegisterController');

//regiterController.index

router.use('/', registerController.index);

module.exports = router;