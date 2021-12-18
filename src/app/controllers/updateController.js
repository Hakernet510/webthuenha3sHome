const { db } = require("../../connect");

const updateController = async (req, res) => {
  console.log("req là: ", req.body);

  const { hostels } = await getHostels(req.body);

  res.json({
    hostels
  });
};

const getHostels = async (data) => {
  var result = null;

  const getResult = (rows) => (result = rows);
    const id = localStorage.getItem("hostel_id");

  await db
    .promise()
    .query(`SELECT * FROM hostels WHERE hostel_id = ${id}`)
    .then(([rows]) => getResult(rows));

  return { hostels: result };
};

module.exports = updateController;