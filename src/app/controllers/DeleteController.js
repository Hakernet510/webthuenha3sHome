const { db } = require("../../connect");
const app = require("express");
const fs = require("fs");

const deleteController = async (req, res) => {
  const file = req.body;
  const filepath =
    "../../Desktop/New folder/src/public/image/" + file.image + ".png";
  console.log(req.body);
  deleteHostel(req.body);
  fs.unlink(filepath, (error) => {
    if (error) {
      console.log("Error in deleting image");
      console.log(error.message);
    } else {
      console.log("Deleted successfilly");
    }
  });
  res.json({
    message: "success",
  });
};

const deleteHostel = async (data) => {
  await db.promise().query(`DELETE FROM hostels WHERE hostel_id = ${data.id}`);
};

module.exports = deleteController;
