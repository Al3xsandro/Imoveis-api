import {
    Request, 
    Response,
    NextFunction
} from 'express';

import jwt from 'jsonwebtoken';

interface TokenPayload {
    id: string;
    iat: number;
    exp: number;
}

function authMiddleware(
    req: Request, res: Response, next: NextFunction
) {
    const { authorization } = req.headers;

    if(!authorization){
        return res.status(401).send('Authorization header is not found')
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
        const data = jwt.verify(token, process.env.JWT_KEY)

        const { id } = data as TokenPayload;

        res.locals.user = id

        return next()
    } catch {
        res.status(401).send('Invalid token');
    }
}

export { authMiddleware }