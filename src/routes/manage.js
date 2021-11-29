const express = require('express');
const router = express.Router();

const manageController = require('../app/controllers/ManageController');

//regiterController.index

router.post('/', manageController);
router.get('/', (req, res)=>{
    res.render('manage')
});

module.exports = router;