const express = require("express");
const router = express.Router();

const landlordController = require("../app/controllers/LandlordController");
const filterController = require("../app/controllers/FilterController");

//homeController.index

router.get("/api", landlordController);
router.get("/", (req, res) => {
  res.render("landlord");
});

module.exports = router;
