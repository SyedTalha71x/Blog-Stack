import connectDB from "../../../../DBConnecttion/db";
import Category from "../../../../Models/Category";


connectDB();
export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            const { slug, title, img } = req.body;
            const category = new Category({
                slug, title, img
            })
            await category.save();
            res.status(200).json({ success: true, category });
        }
        catch (err) {
            res.status(400).json({ success: false, err: "Failed to add data" });
        }
    }
    else {
        res.status(600).json({ error: "Internal Server Error" });
    }
}