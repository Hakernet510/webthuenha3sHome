const express = require('express');
const router = express.Router();

const renterController = require('../app/controllers/RenterController');

//homeController.index

router.post('/', renterController);
router.get('/', (req, res)=>{
        res.render('renter')
});

module.exports = router;