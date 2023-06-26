const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require("./routes/index")
const db = require('./config/db/index')

/** Db connect */
db.connnect();
// static 
app.use(express.static(path.join(__dirname,'public')));

// app.use(morgan('combined'));
// Template engine
app.engine('hbs',handlebars.engine({extname:'.hbs'}));
app.set('view engine','hbs');
app.set('views','./src/resources/views');


route(app);

app.listen(port)