const express = require("express");
const app = express();
const port = 3000;
const route = require('./Route/index');
const morgan = require('morgan');
const db = require("./config/db");
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded());
app.use(express.json());
//-------------
app.use(morgan('combined'));
route(app);
db.connect();

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`);
})