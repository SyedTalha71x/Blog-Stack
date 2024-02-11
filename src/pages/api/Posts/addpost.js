import Post from "../../../../Models/Post";
import connectDB from "../../../../DBConnecttion/db";

connectDB();
export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            const { slug, title, desc, img } = req.body;
            const post = new Post({
                slug, title, desc, img
            })
            await post.save();
            res.status(200).json({ success: true, post });
        }
        catch (err) {
            res.status(400).json({ success: false });
        }
    }
    else {
        res.status(600).json({ error: "Internal Server Error" });
    }
}