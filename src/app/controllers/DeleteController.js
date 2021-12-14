const { db } = require("../../connect");
const app = require('express')

const deleteController = async (req, res) => {
    console.log(req.body);
    deleteHostel(req.body);
    res.render('admin');
}

const deleteHostel = async (data) => {
    await db
    .promise()
    .query(`DELETE FROM hostels WHERE hostel_id = ${data.id}`)

}

module.exports = deleteController;