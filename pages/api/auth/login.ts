import {NextApiRequest, NextApiResponse} from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import DATABASE_CONNECTION from "@/lib/mongoose";
import User from "@/models/User";
import cookie from "cookie";
import { log } from "console";

const JWT_SECRET = process.env.JWT_SECRET as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({message: "Method not allowed"});
    }

    res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust '*' for specific domains
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    const {email, password} = req.body;

    try {
       /*  await DATABASE_CONNECTION();
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: "Those credentials do not match in our record."});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({message: "Those credentials do not match in our record."});
        }

        const token = jwt.sign({id: user._id, email: user.email}, JWT_SECRET, {expiresIn: "1d"});
        res.setHeader("Set-Cookie", cookie.serialize("authToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 7 days
        }));
        res.status(200).json({token, user: {id: user._id, name: user.name, email: user.email}}); */
        res.status(200).json({'Message SUcccess'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal server error", error});
    }
}
