const express = require('express');
const router = express.Router();

const postController = require('../app/controllers/PostController');

//regiterController.index

router.post('/', postController);
router.get('/', (req, res)=>{
    res.render('post')
});

module.exports = router;