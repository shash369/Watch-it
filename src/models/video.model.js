import mongoose, { Schema } from "mongoose";

const videoSchema=new mongoose.Schema({
   
    videoFile:{
        type:String,
        requiewd:true
    },thumbnail  :{
        type:String,
        requiewd:true
    },
    title:{
        type:String,
        requiewd:true
    },description:{
        type:String,
        requiewd:true
    },duration:{
        type:Number,
        requiewd:true
    },views  :{
        type:Number,
        default:0 
    },isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId, 
        ref:"User"
    }
},{timestamps:true});

export const Video=mongoose.model("Video",videoSchema);
 