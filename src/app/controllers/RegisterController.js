const { json } = require("express");
const { db } = require("../../connect");

const registerController = async (req, res) => {
  console.log("req là: ", req.body);
  let i = 1;

  const resInput = await checkInput(req.body);
  if (!resInput) return res.json({ message: "fail" });

  const resU = await checkUsername(req.body);
  if (resU.length !== 0) return res.json({message: "Account already exists"});

  const resPN = await checkPhoneN(req.body);
  if (resPN.length !== 0) return res.json({message: "Phone number already used"});

  const resP = await checkPass(req.body);
  if (!resP) return res.json({message: "Repeat wrong password"});

  while(true) {
    const resUser = await checkUser (i);
    if (resUser.length === 0) {
      await insertDB(req.body, i);     
      break; 
    }
    i++;
  }

  res.json({
    message: "success",
  })
};

const checkUser = async (data) => {
  var result = null;

  const getResult = (rows) => (result = rows);

  await db
    .promise()
    .query(`SELECT * FROM landlords WHERE id=${data}`)
    .then(([rows]) => getResult(rows));

  return result ;
};

const checkInput = async (data) => {
    if (!data) return false;
    if (!data.username) return false;
    if (!data.phonenumber) return false;
    if (!data.password) return false;
    if (!data.Rpassword) return false;
    if (!data.role) return false;
    if (!data.name) return false;
    if (data.username < 5) return false;
    if (data.phonenumber.length < 8) return false;
    if (data.password.length < 5) return false;
    if (data.Rpassword.length < 5) return false;
    return true;
  };

  const checkUsername = async (data) => {
    var result = null;
  
    const getResult = (rows) => (result = rows);
    await db
      .promise()
      .query(
        `SELECT * FROM landlords WHERE user_name= '${data.username}'`
      )
      .then(([rows]) => getResult(rows));
  
    return result;
  };

  const checkPhoneN = async (data) => {
    var result = null;
  
    const getResult = (rows) => (result = rows);
    await db
      .promise()
      .query(
        `SELECT * FROM landlords WHERE phone_number= '${data.phonenumber}'`
      )
      .then(([rows]) => getResult(rows));
  
    return result;
  };

  const insertDB = async (data, i) => {
    const result = data.username;

    await db
      .promise()
      .query(
        `INSERT INTO Landlords (id,name,user_name,password, phone_number, role) VALUES (${i}, '${data.name}', '${data.username}', '${data.password}', '${data.phonenumber}', ${data.role});`
      )

      return result;
  };
  
  const checkPass = async (data) => {
    if(data.password !== data.Rpassword) {
      return false
    };
    return true;
  };



module.exports = registerController;
