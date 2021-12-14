const { db } = require("../../connect");
const app = require('express')
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage("./scratch");
  }

const switchController = async (req, res) => {
    console.log(req.body);
    const Hid = req.body;
    console.log(Hid.id);
    localStorage.setItem("hostel_id", Hid.id);
    res.render('update');
}

module.exports = switchController;