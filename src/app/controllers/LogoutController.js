const { db } = require("../../connect");
const app = require('express')

const logoutController = async (req, res) => {

const ID = await getID();

await deleteUser(ID);
    
}

const getID = async () => {
    var result = null;
  
    const getResult = (rows) => (result = rows);
  
    await db
      .promise()
      .query(
        `SELECT id FROM user`
      )
      .then(([rows]) => getResult(rows));
  
    return result[0] ;
  }

const deleteUser = async (data) => {
    await db
    .promise()
    .query(
      `DELETE FROM user WHERE id = ${data.id};`
    )
}

module.exports = logoutController;