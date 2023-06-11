const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Login = new Schema ({
    phone:{type:String},
    pass:{type: String},
    createdAt: {type:Date, default:Date.now},
    updatedAt: {type:Date, default:Date.now},
})

module.exports = mongoose.model("Login",Login)