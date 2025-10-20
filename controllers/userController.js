const Mydata = require("../models/schema");
const Countries = require("../models/countrie");
const moment = require("moment");

const createUser = (req,res)=>{
    Mydata.create(req.body)
    .then(()=>{
    return res.redirect("/")
    }).catch(()=>{
    console.log("user didn't save")
    })
};
const showUser = async (req,res)=>{
    const user = await Mydata.findOne({_id:req.params.id});
    return res.render("users/view-customer",{user:user,moment:moment})
};
const home = async (req,res)=>{
    const mydata=await Mydata.find().populate("country");
    if (!mydata.length) {
    return res.render("users/index", { message: "No data in the tables" });
    }
    return res.render("users/index", { data: mydata, moment });
}
const deleteUser = async (req,res)=>{
    Mydata.deleteOne({_id:req.params.id}).then(()=>{
        console.log("user deleted successfully")
        return res.redirect("/")
    }).catch(()=>{
        console.log("user not found ")
        return res.redirect("/")
    })
}
const addUser = async (req,res)=>{
    const states = await Countries.find();
    console.log(states);
    return res.render("users/add-customers",{states :states});
}
const search = async (req,res)=>{
    const data = await Mydata.find({name:req.body.search}).populate("country");
    if(data.length>0){
        console.log("++++++++++++++++++++++++++++++++++++");
        console.log(data)
        return res.render("users/index",{ data: data, moment })
    }else{
        console.log("user not found ")
        return res.redirect("/")
    }
}
const editUser = async (req,res)=>{
    let user = await Mydata.findOne({_id:req.params.id}).populate("country")
    const states = await Countries.find();
    if(!user){
        return res.render("users/edit-customer",{err:"user not found "});
    }else{
        return res.render("users/edit-customer",{user:user,states:states});
    }
};
const updateUser = async (req, res) => {
    try {
        const updatedUser = await Mydata.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(updatedUser);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.redirect("/");
    }
}
module.exports={createUser,showUser,home,deleteUser,addUser,search,editUser,updateUser};