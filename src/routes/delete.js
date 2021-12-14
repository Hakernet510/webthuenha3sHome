const express = require('express');
const router = express.Router();

const deleteController = require('../app/controllers/DeleteController');

//deleteController.index

router.post('/', deleteController);

module.exports = router;