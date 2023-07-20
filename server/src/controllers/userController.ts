import { Request, Response, } from "express";
import User from "../models/userModel";
import bcrypt from "bcrypt"
import { Types } from "mongoose";
import jwt from 'jsonwebtoken'
import { IUser } from "../types";


const getUserToken = (_id: string | Types.ObjectId) => {
    const authentificatedUserToken = jwt.sign(
        { _id },
        "express",
        {
            expiresIn: "7d"
        }
    )

    return authentificatedUserToken;
}


export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(409).send("user already exist")
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })


        return res.status(201).send({ message: "User created succesfully" })
    } catch (error) {
        console.log("Error in create user", error);

        throw error;

    }
}


export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password }: IUser = req.body;

        const existingUser = await User.findOne();
        if (!existingUser) {
            return res.status(409).send({ message: "User doesnt exist" })
        }

        const isPasswordIdentical = await bcrypt.compare(password, existingUser.password);

        if (isPasswordIdentical) {
            const token = getUserToken(existingUser._id)
            return res.send({
                token,
                user: {
                    email: existingUser.email,
                    name: existingUser.name

                }
            })
        }
        else {
            return res.status(400).send({ message: "Authentification failed" })
        }
    } catch (error) {
        console.log(error);
        throw error;

    }
}

