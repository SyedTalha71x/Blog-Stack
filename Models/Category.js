import mongoose from "mongoose";
import { Schema } from "mongoose";

const categorySchema = new Schema({
    slug: { type: String, unique: true },
    title: String,
    img: String
});

mongoose.models = {}
export default mongoose.model('Category', categorySchema);