import mongoose from "mongoose";

const MONGO_URI = 'mongodb://127.0.0.1:27017/Blogapp';

export default async function connectDB() {
    try {
        mongoose.connect(MONGO_URI);
        console.log("Connection Successfull");
    }
    catch (error) {
        console.log("Connection Failed");
    }
}