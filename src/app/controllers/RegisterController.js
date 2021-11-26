const { db } = require("../../connect");

const registerController = async (req, res) => {
  console.log("req là: ", req.body);

  const resInput = await checkInput(req.body);
  if (!resInput) return res.json({ message: "fail" });

  res.json({
    message: "success",
  })
};

const checkInput = async (data) => {
    if (!data) return false;
    if (!data.phonenumber) return false;
    if (!data.password) return false;
    if (!data.Rpassword) return false;
    if (data.phonenumber.length < 5) return false;
    if (data.password.length < 5) return false;
    if (data.Rpassword.length < 5) return false;
    return true;
  };

  const insertDB = async (data) => {
    var result = null;
  
    const getResult = (rows) => (result = rows);
  
    await db
      .promise()
      .query(
        `insert into Landlords (name,user_name,password,phone_number) values ('${data.name}', '${data.username}', '${data.password}', '${data.phonenumber}', '${data.role}'`
      )
  
    return result;
  };
  

module.exports = registerController;
