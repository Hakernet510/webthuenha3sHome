const express = require('express');
const router = express.Router();

const updateHostelController = require('../app/controllers/UpdateHostelController');

//updateHostelController.index

router.post('/', updateHostelController);

module.exports = router;