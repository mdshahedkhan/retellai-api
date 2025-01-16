import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Set-Cookie', 'authToken=; Path=/; HttpOnly; Max-Age=0;'); // Clear the cookie
    return res.status(200).json({ message: 'Logged out successfully' });
}
