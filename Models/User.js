import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    _id: String,
    name: String,
    email: { type: String, unique: true },
    emailVerified: Date,
    image: String
});

mongoose.models = {}
export default mongoose.model('User', userSchema);