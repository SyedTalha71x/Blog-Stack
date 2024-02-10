import mongoose from "mongoose";
import { Schema } from "mongoose";

const sessionSchema = new Schema({
    _id: String,
    sessionToken: { type: String, unique: true },
    userId: String,
    expires: Date
});

mongoose.models = {}
export default mongoose.model('Session', sessionSchema);