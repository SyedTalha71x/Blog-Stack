import mongoose from "mongoose";
import { Schema } from "mongoose";

const verificationTokenSchema = new Schema({
    _id: String,
    token: { type: String, unique: true },
    expires: Date
});

mongoose.models = {}
export default mongoose.model('Verificationtoken', verificationTokenSchema);