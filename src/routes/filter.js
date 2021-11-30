const express = require('express');
const router = express.Router();

const filterController = require('../app/controllers/FilterController');

//regiterController.index

router.post('/', filterController);
router.get('/', (req, res)=>{
    res.render('filter')
});

module.exports = router;