const express = require('express');
const router = express.Router();

const landlordController = require('../app/controllers/LandlordController');

//homeController.index

router.post('/', landlordController);
router.get('/', (req, res)=>{
        res.render('landlord')
});

module.exports = router;