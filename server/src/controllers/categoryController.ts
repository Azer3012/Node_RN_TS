import { Request, Response } from "express";
import Category from "../models/categoryModel";
import { ICategory } from "../types";
import { AuthRequest } from "../middleware";


export const getAllCategories = async (req: AuthRequest, res: Response) => {
    try {
        const { user } = req
        const categories = await Category.find({
            user: user
        });



        return res.send(categories)

    } catch (error) {
        console.log(error);
        res.send({ error: "something went wrong" })

        throw error;

    }
}

export const createCategory = async (req: AuthRequest, res: Response) => {
    try {

        const { color, icon, isEditable, name }: ICategory = req.body;

        const user = req?.user

        const category = await Category.create({
            color,
            icon,
            isEditable,
            name,
            user
        })

        res.send(category)

    } catch (error) {
        console.log(error);
        res.send({ error: "something went wrong" })
        throw error;

    }
}


export const deleteCategory = async (req: AuthRequest, res: Response) => {

    try {
        const {id}=req.params

        await Category.deleteMany({ _id: id })
        res.send({ message: "Category deleted" })
    } catch (error) {
        console.log("Error in delete category ", error);
        res.send({ error: "Something went wrong" })
        throw error;

    }
}

export const updateCategory=async(req:AuthRequest,res:Response)=>{
    try {
        const {_id,color,icon,isEditable,name}:ICategory=req.body;
        await Category.updateOne({
            _id,

        },{
            $set:{
                name,
                color,
                icon,
                isEditable
            }
        })

        res.send({message:"Category updated successfully"})
    } catch (error) {
        console.log("erorr in update category",error)
        throw error;
    }
}