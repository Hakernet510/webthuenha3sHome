const { db } = require("../../connect");
const app = require('express');
const { response } = require("express");

const logoutController = async () => {

await deleteUser();
    
response.redirect('/login');
}

const deleteUser = async () => {
    await db
    .promise()
    .query(
      `drop table user`
    )
}

module.exports = logoutController;