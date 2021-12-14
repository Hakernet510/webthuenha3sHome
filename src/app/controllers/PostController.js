const { db } = require("../../connect");

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

const postController = async (req, res) => {
  console.log("req là: ", req.body);

  // const resInput = await checkInput(req.body);
  // if (!resInput) return res.json({ message: "fail" });

  var user = localStorage.getItem('user');
  // await insertDB(JSON.parse(user));


  res.json({
    message: "success",
    user: JSON.parse(user)
  });
};

const checkInput = async (data) => {
  if (!data) return false;
  return true;
};

const insertDB = async (data) => {
  const userLocal = JSON.parse(localStorage.getItem("user"));
  await db
    .promise()
    .query(
      `insert into hostels (lanlord_id,Title,Category,description,name,email,phone_number,address,street,district,city,area,price,priceUnit,url) values (${userLocal.id},'${data.title}', '${data.category}', '${data.description}', '${data.name}', '${data.email}', '${data.phonenumber}', '${data.address}', '${data.street}', '${data.district}', '${data.city}', '${data.area}', '${data.price}', '${data.piceUnit}', '${imageLocal.url}')`
    );
};

module.exports = postController;
