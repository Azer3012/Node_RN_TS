import { Request, Response, } from "express";
import User from "../models/userModel";
import bcrypt from "bcrypt"


export const createUser=async(req:Request,res:Response)=>{
    try {
        const {name,email,password}=req.body;

        const existingUser=await User.findOne( {email} )
        if(existingUser){
            return res.status(409).send("user already exist")
        }

        const hashedPassword=await bcrypt.hash(password,12);

        const user=await User.create({
            name,
            email,
            password:hashedPassword
        })
        

        return res.status(201).send({message:"User created succesfully"})
    } catch (error) {
        console.log("Error in create user",error);

        throw error;
        
    }
}


