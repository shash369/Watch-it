import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import {User} from "../models/user.model.js"
import {uploadOnCloudinary}from "../utils/cloudinary.js"


const registerUser=asyncHandler(async(req,res)=>{
    //steps 
    //user detail 
    //valodation //unique ..check img check avatar
    //upload them 
    //create user obj -enter in db
    //remove pass and referesh token field from response
    //check for user creation
    //return res
    const {username,fullname,email,password}=req.body;
    console.log("email is::"+email);
    // res.send("done");

    if (!fullname || fullname.trim() === "") {
        throw new ApiError(400, "Full name is required");
    }
    if (!username || username.trim() === "") {
        throw new ApiError(400, "Username is required");
    }
    if (!email || email.trim() === "") {
        throw new ApiError(400, "Email is required");
    }
    if (!password || password.trim() === "") {
        throw new ApiError(400, "Password is required");
    }
     
    const existedUser= await User.findOne({
        $or:[{username},{email}]
    })
    if(existedUser){
        throw new ApiError(409,"User with same credentials exists");
    }

    const avtPath=req.files?.avatar[0]?.path;
    const covImPath=req.files?.coverImage[0]?.path;
    
    if (!avtPath) {
        throw new ApiError(400,"avatar img is required");
    }

    const avatar=await uploadOnCloudinary(avtPath);
    const coverImage = covImPath ? await uploadOnCloudinary(covImPath) : null;
    if (!avatar) {
        throw new ApiError(400,"avatar img is required");
    };

    const user=await User.create({
        fullname,
        avatar:avatar.url,
        coverImage:coverImage?.url||"",
        email,
        password,
        username:username.toLowerCase()
    });
    const createdUser=await User.findById(user._id).select(
     "-password -refreshToken"
    )
    if (!createdUser) {
        throw new ApiError(500, "Somthing went wrong");
    }

    return res.status(201).json(
       new ApiResponse(201, createdUser, "User created successfully")
    );

})
export  {registerUser};