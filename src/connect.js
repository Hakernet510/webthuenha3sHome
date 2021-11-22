const mysql2 = require("mysql2");

exports.db = mysql2.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "admin",
  database: "webthuenhanhom2",
});
