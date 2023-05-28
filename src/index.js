const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// app.use(morgan('combined'));
// Template engine
app.engine('hbs',handlebars.engine({extname:'.hbs'}));
app.set('view engine','hbs');
app.set('views','./src/resources/views');

app.get('/', function (req, res) {
  res.render('home');
   
})

app.listen(port)