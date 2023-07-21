import { Response } from 'express';
import { AuthRequest } from './../middleware/index';
import Task from '../models/taskModel';
import { ITask } from '../types';


export const getAllTasks=async(req:AuthRequest,res:Response)=>{
    try {
        const userId=req.user
        const tasks=await Task.find({
            user:userId
        })

        res.send(tasks)
    } catch (error) {
        console.log(error);
        throw error;
        
    }
}

export const createTask=async(req:AuthRequest,res:Response)=>{



    try {
        const userId=req.user;
        
        const {name,categoryId,}:ITask=req.body


        const today=new Date();

        
        today.setHours(0,0,0,0)

        

        const task=await Task.create({
         
            name,
            date:today,
            categoryId,
            user:userId,

        })
        res.send(task)
    } catch (error) {
        console.log("error in create task",error);
        throw error;
        
    }
}

export const toggleTaskStatus=async(req:AuthRequest,res:Response)=>{
    try {
        const {isCompleted}=req.body;
        const {id}=req.params;
        const task=await Task.updateOne({
            _id:id,
        },
        {
            
                isCompleted
            
            
        })
        res.send({message:"Task status updated"})
    } catch (error) {
        console.log("error in toggle task status",error);
        throw error;
    }
}


export const getAllTaskByCategory=async(req:AuthRequest,res:Response)=>{
    try {
        const userId=req.user;
        const {id}=req.params;

        const tasks=await Task.find({
            user:userId,
            categoryId:id
        
        })

        res.send(tasks)
    } catch (error) {
        console.log("error in get all task by category",error);
        throw error;
        
    }
}

export const getAllCompletedTask=async(req:AuthRequest,res:Response)=>{
    try {
        const userId=req.user;

        const tasks=await Task.find({
            user:userId,
            isCompleted:true
        })

        res.send(tasks)
        
    } catch (error) {
        console.log('Error in get all completed task',error)
    }
}
export const getTaskForToday=async(req:AuthRequest,res:Response)=>{

    const today=new Date();

    
        today.setHours(0,0,0,0)

    try {
        const userId=req.user;

        const today=new Date();

        
        
        today.setHours(0,0,0,0)
        const tasks=await Task.find({
            user:userId,
            date:today
        })
        res.send(tasks)
    } catch (error) {
        console.log("error in get task for today",error);
        
    }
}

export const editTask=async(req:AuthRequest,res:Response)=>{
    try {      
        const today=new Date();
        today.setHours(0,0,0,0)

        const {id}=req.params;

        const {name,categoryId}:ITask=req.body
        await Task.updateOne({
            
            _id:id,


        },{
            $set:{
                name,
                categoryId,
                date:today
            }
        })
        
        res.send({message:"Task updated succesfully"})
    } catch (error) {
        console.log("error in edit task",error)
        throw error;
    }
}