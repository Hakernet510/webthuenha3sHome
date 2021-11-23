const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const bodyParser = require("body-parser");

const { extname } = require('path');
const app = express();
const port = 3000;

const db = require('./connect')
const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'));

//Template engine
// app.engine('hbs', handlebars({
//   extname: '.hbs'
// }));

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname,'resources/views'));

app.use(bodyParser.json());   
app.use(bodyParser.urlencoded({ extended: true }));

//Routes init
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/login`)
})