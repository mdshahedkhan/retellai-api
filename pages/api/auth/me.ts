import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = req.cookies.authToken; // Replace 'authToken' with your cookie name for authentication
    if (token) {
        return res.status(200).json({isAuthenticated: true, token});
    }

    return res.status(401).json({isAuthenticated: false});
}
