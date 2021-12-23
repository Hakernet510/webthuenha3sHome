const { db } = require("../../connect");

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

const postController = async (req, res) => {
  console.log("req là: 9", req.body);
  const data = req.body;
  console.log(data.name, data.price, data.address);
  // const resInput = await checkInput(req.body);
  // if (!resInput) return res.json({ message: "fail" });
  let i = 1;
  var user = localStorage.getItem('user');
  const image = localStorage.getItem('image');
  console.log("🚀 ~ file: PostController.js ~ line 16 ~ postController ~ user", user)
  console.log("🚀 ~ file: PostController.js ~ line 17 ~ postController ~ image", image)
  
    while(true) {
      const resHostel = await checkHostels(i);
      console.log("🚀 ~ file: PostController.js ~ line 18 ~ postController ~ resHostel", i)
      if (resHostel.length === 0) {
        await insertDB(req.body, i);     
        break; 
      }
      i++;
    }

  res.json({
    message: "success",
    user: JSON.parse(user),
    image
  });
};

const checkHostels = async (data) => {
  var result = null;

  const getResult = (rows) => (result = rows);

  await db
    .promise()
    .query(`SELECT * FROM hostels WHERE hostel_id=${data}`)
    .then(([rows]) => getResult(rows));

  return result ;
};

const insertDB = async (data, i) => {
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const imageLocal = localStorage.getItem("image"); 
  console.log("ảo thật đấy", i, userLocal[0].id,data.title, data.category, data.description, data.name, data.email, data.phonenumber, data.address, data.street, data.district, data.city, data.area, data.price, data.priceUnit, imageLocal);
  await db
    .promise()
    .query(
      `insert into hostels (hostel_id, lanlord_id,Title,Category,description,name,email,phone_number,address,street_id,district_id,city_id,area,price,priceUnit,url) values (${i}, ${userLocal[0].id},'${data.title}', '${data.category}', '${data.description}', '${data.name}', '${data.email}', '${data.phonenumber}', '${data.address}', '${data.street}', '${data.district}', '${data.city}', '${data.area}', '${data.price}', '${data.priceUnit}', '${imageLocal}')`
    );
};

module.exports = postController;
