import mongoose from 'mongoose'

const connectToDB=async()=>{
    try {
        const connection=await mongoose.connect("mongodb+srv://azerAbishov:azer&A7777@cluster0.wz6ukic.mongodb.net/todo?retryWrites=true&w=majority")

        if(connection){
            console.log("Connection established")
        }
    } catch (error) {
        console.log(error);
        throw error;
        
    }
}


export default connectToDB;