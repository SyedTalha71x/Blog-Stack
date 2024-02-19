import Comment from "../../../../Models/Comment";
import connectDB from "../../../../DBConnecttion/db";


connectDB();
export default async function handler(req, res) {
    if (req.method == 'GET') {
        try {
            const comment = await Comment.find();
            res.status(200).json((comment))
        }
        catch (error) {
            res.status(400).json({ success: false, message: "Failed to fetched Comment" });
        }
    }
    else {
        res.status(600).json({ message: "Internal Server Error" });
    }
}