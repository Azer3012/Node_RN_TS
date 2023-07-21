import  jwt  from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import User from '../models/userModel';




export interface AuthRequest extends Request{
    user:string
}

interface JwtPayload {
    _id: string
  }

export const authentificationMiddleware=async(req:AuthRequest,res:Response,next:NextFunction)=>{
    try {
        const {authorization}=req.headers;
        if(!authorization){
            return res.status(401).json({
                error:"Authorization required"
            })
        }

        const token=authorization; 
        const { _id }=jwt.verify(token,"express") as JwtPayload
        const existingUser=await User.findOne({_id})
        if(existingUser){
            req.user=existingUser.id
        }
        next()
    } catch (error) {
        console.log(error);
        throw error
        
    }
}