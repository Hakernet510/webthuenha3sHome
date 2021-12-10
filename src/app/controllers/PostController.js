const { db } = require("../../connect");
const multer = require('multer');

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

const postController = async (req, res) => {
  console.log("req là: ", req.body);

  // const resInput = await checkInput(req.body);
  // if (!resInput) return res.json({ message: "fail" });

  upload(req, res, (err) => {
    if(err) {
      console.log("fail");
    } else {
      console.log(req.file);
    }
  });

  var user = localStorage.getItem('user');
  // await insertDB(JSON.parse(user));


  res.json({
    message: "success",
    user: JSON.parse(user),
    url
  });
};

const checkInput = async (data) => {
  if (!data) return false;
  return true;
};

let url;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, '../../public/image');
  },
  filename: function (req, file, cb) {
    console.log(req.file);
    url = Date.now() + '.png';

    cb(null, url);
  }
});

const upload = multer({ storage: storage }).single('image');

const insertDB = async (data) => {
  const userLocal = JSON.parse(localStorage.getItem("user"));
  const imageLocal = JSON.parse(localStorage.getItem("image"));
  await db
    .promise()
    .query(
      `insert into hostels (lanlord_id,Title,Category,description,name,email,phone_number,address,street,district,city,area,price,priceUnit,url) values (${userLocal.id},'${data.title}', '${data.category}', '${data.description}', '${data.name}', '${data.email}', '${data.phonenumber}', '${data.address}', '${data.street}', '${data.district}', '${data.city}', '${data.area}', '${data.price}', '${data.piceUnit}', '${imageLocal.url}')`
    );
};

module.exports = postController;
