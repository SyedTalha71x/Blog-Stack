import connectDB from "../../../../DBConnecttion/db";
import User from "../../../../Models/User";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');


connectDB();
export default async function handler(req, res) {
    if (req.method === 'POST') {
        let user = await User.findOne({ "email": req.body.email });
        var bytes = CryptoJS.AES.decrypt(user.password, 'DoNtRuN$6w7s');
        var decryptedcode = bytes.toString(CryptoJS.enc.Utf8);
        if (user) {
            if (req.body.email === user.email && req.body.password === decryptedcode) {
                var token = jwt.sign({ email: user.email, name: user.name }, 'DontShopgobonanza', { expiresIn: '1d' });
                res.status(200).json({ success: true, token });
            }
        }
        else {
            res.status(600).json({ success: false, message: "invalid credientials" });
        }
    }
}