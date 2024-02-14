import connectDB from "../../../../DBConnecttion/db";
import User from "../../../../Models/User";
var CryptoJS = require("crypto-js");

connectDB();
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, password } = req.body;
        let user = new User({
            name, email, password: CryptoJS.AES.encrypt(req.body.password, 'DoNtRuN$6w7s').toString()
        });
        let json = await user.save();
        res.status(200).json({ success: true, json });
    }
    else {
        res.status(600).json({ success: false });
    }

}