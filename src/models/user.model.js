 import mongoose, { Schema } from "mongoose";

 const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullname:{
        type:String,
        required:true,  
        trim:true,
        index:true
    },
    avatar:{//cloud
        type:String,
        required:true,
    },
    coverImage:{
        type:String,//cloud url
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,"password is required"]
    }
 },{timestamps:true});

export const User=mongoose.model('User',userSchema);