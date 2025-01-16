import {NextApiRequest, NextApiResponse} from "next";
import jwt from "jsonwebtoken";
import {jwtVerify} from "jose";

const JWT_SECRET = process.env.JWT_SECRET as string;

export interface AuthenticatedRequest extends NextApiRequest {
    user?: { id: string; email: string };
}

export function verifyAuth(req: AuthenticatedRequest, res: NextApiResponse) {
    const {authToken} = req.cookies;

    if (!authToken) {
        res.status(401).json({message: "Unauthorized"});
        return null;
    }

    try {
        const decoded = jwt.verify(authToken, JWT_SECRET) as { id: string; email: string };
        req.user = decoded;
        return decoded;
    } catch (error) {
        res.status(401).json({message: "Invalid token"});
        return null;
    }
}


export const verifyAuthTokenWithJose = async function (token: any) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const payload = await jwtVerify(token, secret);
    const user = payload.payload;
    console.log(user);
}
