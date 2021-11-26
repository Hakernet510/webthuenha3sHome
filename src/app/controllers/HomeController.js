const { db } = require("../../connect");

const homeController = async (req, res) => {
  console.log("req là: ", req.body);
}

module.exports = homeController;
