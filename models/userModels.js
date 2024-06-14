const mongoose = require("mongoose");

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please add the user Name"],
    },
    email:{
        type:String,
        required:[true,"Please add the user"],
        unique:[true,"Email.address already taken"],
    },
    password:{
        type:String,
        required:[true,"Please ad dthe user email address"],

    },
   },
    {
        timestamps:true,
    }
);
module.exports=mongoose.model("User",userSchema);