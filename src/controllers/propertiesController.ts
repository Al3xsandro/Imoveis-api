import { Request, Response} from 'express';
import { propertiesService } from '../services/propertiesService';

interface propertiesData {
    user_id: string;
    cep: string;
    number: string;
    complement: string;
    value: string;
    bedrooms: string;
    avaliable: true;
}

class propertiesController{
    async create(req: Request, res: Response){
        const { 
            cep,
            number,
            complement,
            value,
            bedrooms,
            avaliable
        }:propertiesData = req.body;
        
        // auth middleware
        const user_id = res.locals.user

        const properties = new propertiesService(); 
        
        const resp = await properties.create({
            user_id,
            cep,
            number,
            complement,
            value,
            bedrooms,
            avaliable
        })

        return res.json(resp)
    }
    async update(req: Request, res: Response){
        return
    }
    async delete(req: Request, res: Response){
        return
    }
    async get(req: Request, res: Response){
        const { cep }:propertiesData = req.body;

        const user_id = res.locals.user
        const properties = new propertiesService();

        const resp = await properties.getProperties({ user_id, cep })

        return resp
    }
}

export { propertiesController }