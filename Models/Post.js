import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new Schema({
    slug: { type: String, unique: true },
    title: String,
    desc: String,
    img: String,
});

mongoose.models = {}
export default mongoose.model('Post', postSchema);