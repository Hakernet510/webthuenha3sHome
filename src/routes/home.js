const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController');

//homeController.index

router.post('/', homeController);
router.get('/', (req, res)=>{
    if(false){
        res.render('landlord')
    }
    else{
        res.render('renter')
    }
});

module.exports = router;