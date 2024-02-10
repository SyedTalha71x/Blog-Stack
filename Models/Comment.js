import mongoose from "mongoose";
import { Schema } from "mongoose";

const commentSchema = new Schema({
    _id: String,
    createdAt: { type: Date, default: Date.now },
    desc: String,
    userEmail: String,
    postSlug: String
});


mongoose.models = {}
export default mongoose.model('Comment', commentSchema);
