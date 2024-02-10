import mongoose from "mongoose";
import { Schema } from "mongoose";

const accountSchema = new Schema({
    _id: String,
    userId: String,
    type: String,
    provider: String,
    providerAccountId: String,
    refresh_token: String,
    access_token: String,
    expires_at: Number,
    token_type: String,
    scope: String,
    id_token: String,
    session_state: String
});

mongoose.models = {}
export default mongoose.model('Account', accountSchema);


