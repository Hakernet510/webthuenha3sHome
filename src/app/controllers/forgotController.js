const { db } = require("../../connect");
const app = require('express')

const forgotController = async (req, res) => {
  console.log("req là: ", req.body);

  const resInput = await checkInput(req.body);
  if (!resInput) return res.json({ message: "fail" });

  const resU = await checkUsername(req.body);
  if (resU.length === 0) return res.json({ message: "Account doesn't exists" });

  const resPN = await checkPhoneN(req.body);
  if (resPN.length === 0) return res.json({ message: "Wrong phone number" });

  const resP = await checkPass(req.body);
  if (!resP) return res.json({ message: "Repeat wrong password" });

  const id = await getID(req.body);
  
  await changePass(id.id, req.body);

  res.json({
    message: "success",
  });
};

const checkInput = async (data) => {
  if (!data) return false;
  if (!data.username) return false;
  if (!data.phonenumber) return false;
  if (!data.password) return false;
  if (!data.Rpassword) return false;
  if (data.username.length < 5) return false;
  if (data.phonenumber.length < 5) return false;
  if (data.password.length < 5) return false;
  if (data.Rpassword.length < 5) return false;
  return true;
};

const checkUsername = async (data) => {
  var result = null;

  const getResult = (rows) => (result = rows);
  await db
    .promise()
    .query(`SELECT * FROM landlords WHERE user_name= '${data.username}'`)
    .then(([rows]) => getResult(rows));

  return result;
};

const checkPass = async (data) => {
  if (data.password !== data.Rpassword) {
    return false;
  }
  return true;
};

const checkPhoneN = async (data) => {
  var result = null;

  const getResult = (rows) => (result = rows);
  await db
    .promise()
    .query(`SELECT * FROM landlords WHERE phone_number= '${data.phonenumber}'`)
    .then(([rows]) => getResult(rows));

  return result;
};

const getID = async (data) => {
  var result = null;

  const getResult = (rows) => (result = rows);

  await db
    .promise()
    .query(
      `SELECT id FROM landlords WHERE user_name= '${data.username}'`
    )
    .then(([rows]) => getResult(rows));

  return result[0];
};

const changePass = async (id, data) => {
  await db
    .promise()
    .query(
      `UPDATE landlords SET password = '${data.password}' WHERE id = ${id}`
    )
};


module.exports = forgotController;
