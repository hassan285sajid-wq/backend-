import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar:{
        type: String,
        required:true
    },
    avatar:{
        type: String,
        required:true
    },
    avatar:{
        type: String,
        required:true
    },
    avatar:{
        type: String,
        required:true
    },
    
    coverImage:{
        type: String,
    },
    watchHistory: [{
        type: Schema.Types.ObjectId,
        ref: "video"
    }],
    password: {
        type: String,
        required: [true, "Password is required"]
    },
     refreshToken: {
    type: String
   } 
}, 
{
    timestamps: true
});

export const User = mongoose.model("User", userSchema);