const express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/LoginController');

//loginController.index

router.post('/', loginController);
router.get('/', (req, res)=>{
    res.render('login')
});

module.exports = router;