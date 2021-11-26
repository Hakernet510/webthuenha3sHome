const express = require('express');
const router = express.Router();

const forgotController = require('../app/controllers/ForgotController');

//regiterController.index

router.post('/', forgotController);
router.get('/', (req, res)=>{
    res.render('forgot')
});

module.exports = router;