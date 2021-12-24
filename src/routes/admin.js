const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.post('/', adminController);
router.get('/', (req, res)=>{
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user[0].role);
    if (user[0].role == 2) {
        res.render('admin')
    }
    res.render('notfound')
});

module.exports = router;