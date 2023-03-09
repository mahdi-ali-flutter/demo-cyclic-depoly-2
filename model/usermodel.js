const mongoose =require('mongoose');

const User=mongoose.Schema({
     
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
})

const usermodel=mongoose.model("User",User);
module.exports=usermodel;