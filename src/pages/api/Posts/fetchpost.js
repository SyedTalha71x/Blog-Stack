import Post from "../../../../Models/Post";
import connectDB from "../../../../DBConnecttion/db";


connectDB();
export default async function handler(req, res) {
    if (req.method == 'GET') {
        try {
            const post = await Post.find();
            res.status(200).json((post))
        }
        catch (error) {
            res.status(400).json({ success: false, message: "Failed to fetched Post" });
        }
    }
    else {
        res.status(600).json({ message: "Internal Server Error" });
    }
}