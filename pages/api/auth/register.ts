import {NextApiRequest, NextApiResponse} from "next";
import bcrypt from "bcryptjs";
import DATABASE_CONNECTION from "@/lib/MongoDB";
import User from "@/models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({message: "Method not allowed"});
    }

    const {name, email, password} = req.body;

    try {
        await DATABASE_CONNECTION();
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({message: "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({name, email, password: hashedPassword});

        res.status(201).json({message: "User registered successfully"});
    } catch (error) {
        res.status(500).json({message: "Internal server error", error});
    }
}
