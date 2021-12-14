const express = require('express');
const router = express.Router();

const switchController = require('../app/controllers/SwitchController');

//switchController.index

router.post('/', switchController);

module.exports = router;