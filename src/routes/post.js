const express = require('express');
const router = express.Router();

const postController = require('../app/controllers/PostController');

//regiterController.index

router.use('/', postController.index);

module.exports = router;