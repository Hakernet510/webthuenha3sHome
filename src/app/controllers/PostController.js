const { db } = require("../../connect");

const postController = async (req, res) => {
  console.log("req là: ", req.body);

  // const resInput = await checkInput(req.body);
  // if (!resInput) return res.json({ message: "fail" });

  res.json({
    message: "success",
    user: JSON.parse(localStorage.getItem("user")),
  });
};

const checkInput = async (data) => {
  if (!data) return false;
  return true;
};

const checkDB = async (data) => {
  var result = null;

  const getResult = (rows) => (result = rows);

  await db
    .promise()
    .query(
      `SELECT * FROM landlords WHERE user_name= '${data.username}' AND password='${data.password}'`
    )
    .then(([rows]) => getResult(rows));
  return result;
};

const insertDB = async (data) => {
  const userLocal = JSON.parse(localStorage.getItem("user"));
  await db
    .promise()
    .query(
      `insert into hostels (lanlord_id,Title,Category,description,name,email,phone_number,address,street,district,city,area,price) values (${userLocal.id},'${data.tile}', '${data.categories}', '${data.description}', '${data.name}', '${data.email}', '${data.phonenumber}', '${data.address}', '${data.street}', '${data.district}', '${data.city}', '${data.area}', '${data.price} ${data.piceUnit}')`
    );
};

module.exports = postController;
