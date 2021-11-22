const express = require('express');
const router = express.Router();

const filterController = require('../app/controllers/FilterController');

//regiterController.index

router.use('/', filterController.index);

module.exports = router;