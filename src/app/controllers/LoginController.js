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

  const saveID = await getID(req.body);

  await create();

  await insertID(saveID);

  const R = await getRole(req.body);

  res.json({
    message: "success",
    user: resDB,
    role: R.role
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

  return result[0];
};

const getID = async (data) => {
  var result = null;

  const getResult = (rows) => (result = rows);

  await db
    .promise()
    .query(
      `SELECT id FROM landlords WHERE user_name= '${data.username}' AND password='${data.password}'`
    )
    .then(([rows]) => getResult(rows));

  return result[0] ;
}

const create = async () => {
  await db
    .promise()
    .query(
      `CREATE TABLE User (id int NOT NULL AUTO_INCREMENT,userID int NOT NULL,PRIMARY KEY (id))`
    )
}

const insertID = async (data) => {
  await db
    .promise()
    .query(
      `INSERT INTO user (userID) VALUES ('${data.id}')`
    )
}

  const getRole = async (data) => {
    var result = null;

    const getResult = (rows) => (result = rows);

    await db
      .promise()
      .query(
        `SELECT role FROM landlords WHERE user_name= '${data.username}' AND password='${data.password}'`
      )
      .then(([rows]) => getResult(rows));

    return result[0] ;
  }

module.exports = loginController;
