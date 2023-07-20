import express, { Request, Response } from "express";
import connectToDB from "./db";
import userRoutes from "./routes/userRoutes";

const app=express();

app.use(express.json())

const PORT=1337;

connectToDB();






app.get('/ping',(req:Request,res:Response)=>{
    res.send("Pong")
})

app.use('/user',userRoutes)


app.listen(PORT,()=>{
    console.log("app listening")
})