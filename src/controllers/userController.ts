import { Request, Response} from 'express';
import { userService } from '../services/userService';

interface User {
    name: string;
    cpf: string;
    email: string;
    password: string;
}

class userController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { 
                name,
                cpf, 
                email, 
                password 
            }: User = req.body;
    
            if (!name.trim() || !cpf.trim() || !email.trim() || !password){
                return res.status(400).send('You should all fields!')
            }
            
            const user = new userService();
    
            const resp = await user.create({ name, cpf, email, password });
    
            return res.json(resp)
        } catch (err) {
            return res.status(400).send({data: err.message})
        }
    }
}

export { userController }