const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/web");
// const edituserroutes = require("./routes/edituser");
// const Mydata = require("../models/Mydata");
const app = express();
const port = process.env.PORT || 3000;
// ++++++++++++++++++++++++++++++++
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));
const connectLivereload = require("connect-livereload");
const { request } = require("http");
app.use(connectLivereload());
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 0);
});
// ++++++++++++++++++++++++++++++++++
app.set("view engine",'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
mongoose.connect("mongodb+srv://mostafaessam9511_db_user:pGKy08GoVvBOc7vY@cluster0.inzuujg.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0")
  .then(()=>{
    app.listen(port,()=>{console.log("connected successfully!!")})
  }).catch(()=>{
    console.log("Failed to connect to DB !!")
  })
app.use(routes);
// app.use("/edit-customer",edituserroutes);