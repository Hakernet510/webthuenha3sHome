const { db } = require("../../connect");
const app = require('express')

const logoutController = async () => {

await deleteUser();
    
}

const deleteUser = async () => {
    await db
    .promise()
    .query(
      `drop table user`
    )
}

module.exports = logoutController;