const { name } = require("ejs");
const mongoose=require("mongoose");
// const schema = mongoose.Schema;
const countriesSchema = new mongoose.Schema({
    name:String,
})
const country = mongoose.model("country",countriesSchema);
module.exports=country;