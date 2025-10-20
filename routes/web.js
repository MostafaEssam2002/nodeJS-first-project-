const Mydata = require("../models/schema");
const Countries = require("../models/countrie");
const userController = require("../controllers/userController");
const moment=require("moment")
const express = require("express");
const app = express.Router();
app.get("/",userController.home);
app.get("/add-customers",userController.addUser);
app.post("/add-customers/",userController.createUser);
app.get("/show-customer/:id",userController.showUser)
app.post("/delete-customer/:id",userController.deleteUser);
app.post("/search",userController.search)
app.get("/edit-customer/:id", userController.editUser);
app.post("/edit-customer/:id", userController.updateUser);
module.exports=app;