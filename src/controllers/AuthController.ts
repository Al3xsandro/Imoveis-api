import { Request, Response} from 'express';
import { authService } from '../services/authService';

interface User {
    email: string;
    password: string;
}

class authController {
    async auth(req: Request, res: Response): Promise<Response> {
        try {
            const { 
                email, 
                password 
            }: User = req.body;
    
            if (!email.trim() || !password){
                return res.status(400).send('You should all fields!')
            }
            
            const user = new authService();

            const resp = await user.auth(email, password);

            return res.json(resp)
        } catch(err) {
            return res.status(400).send({data: err.message})
        }
    }
}

export { authController }