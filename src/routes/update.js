const express = require('express');
const router = express.Router();

const updateController = require('../app/controllers/UpdateController');

//updateController.index

router.get('/api', updateController);
router.get('/', (req, res) => {
    res.render('update')
})

module.exports = router;