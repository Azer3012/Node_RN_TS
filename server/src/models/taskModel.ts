import mongoose, { Schema } from 'mongoose';

const taskSchema=new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Category"
    },
    name:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        required:true,
        
    },
    date:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})