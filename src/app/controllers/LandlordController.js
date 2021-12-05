const { db } = require("../../connect");

const landlordController = async (req, res) => {
  console.log("req là: ", req.body);

  const { hostels } = await getHostels();

  res.json({
    hostels
  });
};

const getHostels = async () => {
  var result = null;

  const getResult = (rows) => (result = rows);

  await db
    .promise()
    .query(`SELECT * FROM hostels`)
    .then(([rows]) => getResult(rows));

  return { hostels: result };
};

module.exports = landlordController;
