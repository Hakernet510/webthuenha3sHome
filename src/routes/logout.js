const express = require('express');
const router = express.Router();

const logoutController = require('../app/controllers/LogoutController');

//logoutController.index

router.post('/', logoutController);
router.get('/', (req, res)=>{
    res.render('login')
});

module.exports = router;