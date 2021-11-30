const express = require('express');
const router = express.Router();

const registerController = require('../app/controllers/RegisterController');

//regiterController.index

router.post('/', registerController);
router.get('/', (req, res)=>{
    res.render('register')
});

module.exports = router;