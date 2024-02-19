import { getSession, useSession } from "next-auth/react";
import connectDB from "../../../../DBConnecttion/db";
import Comment from "../../../../Models/Comment";


connectDB();
export default async function handler(req, res) {
    const session = await getSession({ req });

    if (req.method == 'POST') {
        try {

            if (!session) {
                res.status(400).json({ error: "Not Authenticated" });
            }

            const { username, desc } = req.body;
            const comment = new Comment.create({
                username: session.user.email,
                desc
            })
            await comment.save();
            res.status(200).json({ success: true, comment });

        }
        catch (err) {
            res.status(400).json({ success: false, err: "Failed to add comment" });
        }
    }
    else {
        res.status(600).json({ error: "Internal Server Error" });
    }
}