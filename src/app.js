const path = require('node:path'); 
const express = require("express");
const handlebars = require("express-handlebars")
const app = express();
const port = 3000;
const route = require('./Route/index');
const morgan = require('morgan');
const db = require("./config/db");

app.use(express.urlencoded());
app.use(express.json());
//-------------
app.use(morgan('combined'));
route(app);
app.use(express.static(path.join(__dirname, '../public')));
db.connect();
app.engine(
    'handlebars',
    handlebars.engine({
        extname: 'hbs',
    }),
);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'View'));

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`);
})