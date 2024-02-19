import mongoose from "mongoose";
import { Schema } from "mongoose";

const commentSchema = new Schema({
    username: String,
    desc: String,
});


mongoose.models = {}
export default mongoose.model('Comment', commentSchema);
