import Category from "../../../../Models/Category";
import connectDB from "../../../../DBConnecttion/db";


connectDB();
export default async function handler(req, res) {
    if (req.method == 'GET') {
        try {
            const categories = await Category.find();
            res.status(200).json((categories))
        }
        catch (error) {
            res.status(400).json({ success: false, message: "Failed to fetched Categories" });
        }
    }
    else {
        res.status(600).json({ message: "Internal Server Error" });
    }
}