const { db } = require("../../connect");
const app = require('express')

const loginController = async (req, res) => {
  console.log("req là: ", req.body);

  //check input
  const resInput = await checkInput(req.body);
  if (!resInput) return res.json({ message: "fail" });

  //check database
  const resDB = await checkDB(req.body);
  if (resDB.length === 0) return res.json({ message: "fail" });

  //main

  //res
  res.json({
    message: "success",
    resDB
  })

};

const checkInput = async (data) => {
  if (!data) return false;
  if (!data.username) return false;
  if (!data.password) return false;
  if (data.username.length < 5) return false;
  if (data.password.length < 5) return false;
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

module.exports = loginController;
