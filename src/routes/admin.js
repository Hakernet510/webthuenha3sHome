const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');
const deleteController = require('../app/controllers/DeleteController')

router.post('/', adminController);
router.get('/', (req, res)=>{
    res.render('admin')
});

module.exports = router;