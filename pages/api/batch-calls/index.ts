import {NextApiRequest, NextApiResponse} from "next";
import BatchCall from "@/models/BatchCall";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    try {
        const calls = await BatchCall.find().populate('callNumbers').exec()
        response.json({
            status: 200,
            content: calls,
        })
    }catch (error) {
        response.status(500).json({error: error})
    }
}