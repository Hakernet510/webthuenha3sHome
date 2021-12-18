const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

//regiterController.index

router.post('/', adminController);
router.get('/', (req, res)=>{
    res.render('admin')
});

module.exports = router;