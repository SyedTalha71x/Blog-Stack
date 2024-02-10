import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new Schema({
    _id: String,
    createdAt: { type: Date, default: Date.now },
    slug: { type: String, unique: true },
    title: String,
    desc: String,
    img: String,
    views: { type: Number, default: 0 },
    catSlug: String,
    userEmail: String
});

mongoose.models = {}
export default mongoose.model('Post', postSchema);