const express = require('express');
const router = express.Router();

const detailController = require('../app/controllers/DetailController');

//regiterController.index

router.post('/', detailController);
router.get('/', (req, res)=>{
    res.render('detail')
});

module.exports = router;