const { db } = require("../../connect");
const app = require('express')
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage("./scratch");
  }

const updateHostelController = async (req, res) => {
    console.log(req.body);
    console.log("🚀 ~ file: UpdateHostelController.js ~ line 10 ~ updateHostelController ~ req.body", req.body)
    updateHostel(req.body);
    res.json({
        message: "success"
    })
}

const updateHostel = async (data) => {
    const id = localStorage.getItem("hostel_id");
    await db
    .promise()
    .query(`UPDATE hostels SET Title = '${data.title}', Category = '${data.category}', description = '${data.description}', name = '${data.name}', email = '${data.email}', phone_number = '${data.phonenumber}', address = '${data.address}', street = '${data.street}', district = '${data.district}', city = '${data.city}', area = '${data.area}', price = '${data.price}', priceUnit = '${data.priceUnit}' WHERE hostel_id = ${id}`)

}

module.exports = updateHostelController;