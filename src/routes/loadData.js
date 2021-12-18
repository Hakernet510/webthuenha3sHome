const express = require("express");
const router = express.Router();

const loadDataController = require("../app/controllers/loadDataController");

//homeController.index

router.get("/", loadDataController);

module.exports = router;
