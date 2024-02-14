import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: { type: String, required: true },
});

mongoose.models = {}
export default mongoose.model('User', userSchema);