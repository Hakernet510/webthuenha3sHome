const express = require('express');
const router = express.Router();
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage("./scratch");
  }
const postController = require('../app/controllers/PostController');

router.post('/', postController);
router.get('/', (req, res)=>{
    res.render('post')
});

module.exports = router;