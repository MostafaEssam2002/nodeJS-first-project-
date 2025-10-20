const mongoose=require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const schema=mongoose.Schema;
const artichleSchema = new schema({
  name:String,
  age:Number,
  country:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"country"
  },
  email:String,
  phone:String,
  gender:{
    type:String,
    enum:["male","female"],
    required:true,
  }
},{ timestamps: true })
artichleSchema.plugin(AutoIncrement, { inc_field: "id" });
const Mydata=mongoose.model("Mydata",artichleSchema)
module.exports=Mydata;