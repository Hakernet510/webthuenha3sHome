const { db } = require("../../connect");
const app = require('express')

const adminController = async (req, res) => {
    res.render('admin');
}

module.exports = adminController;