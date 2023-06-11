const express = require("express");

const route = express.Router();
const homeController = require('../Controller/HomeController/index.js')

route.post('/',homeController.handle);
route.get('/',homeController.home);


module.exports = route;