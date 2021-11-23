const { db } = require("../../connect");

const loginController = async (req, res) => {
  console.log("req là: ", req.body);

  const result = await getLandlords();

  res.json({
    message: "success",
    result,
  });
};

const getLandlords = async () => {
  var result = null;

  const getResult = (rows) => (result = rows);

  await db
    .promise()
    .query(`select * from landlords`)
    .then(([rows]) => {
      getResult(rows);
      console.log("create success", rows);
    });

  return result;
};

module.exports = loginController;
