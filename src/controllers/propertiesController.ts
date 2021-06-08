import { Request, Response} from 'express';
import { propertiesService } from '../services/propertiesService';

interface propertiesData {
    id: string;
    user_id: string;
    cep: string;
    number: string;
    complement: string;
    value: string;
    bedrooms: string;
    avaliable: true;
}

class propertiesController{
    // Show all properties
    async get(req: Request, res: Response){
        const properties = new propertiesService();

        const resp = await properties.getAllProperties();

        return res.json(resp)
    }

    async search(req: Request, res: Response){
        try {
            // cep param /search?cep=
            const cep = req.query;

            if(!cep){
                res.send(403).send('An error has occurred')
            }

            const properties = new propertiesService();

            const resp = await properties.searchProperty(cep.cep);

            return res.json(resp)
        } catch(err){
            return res.status(400).send({ data: err.message })
        }
    }

    // Config properties

    async create(req: Request, res: Response){
        try {
            const { 
                cep,
                number,
                complement,
                value,
                bedrooms,
                avaliable
            }:propertiesData = req.body;
    
            if(!cep.trim() || !number.trim() || !complement.trim() || !value.trim() || !bedrooms.trim() || !avaliable){
                return res.status(403).send('You should all fields!')
            }
            
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
        } catch(err){
            return res.status(400).send({ data: err.message });
        }
    }
    async update(req: Request, res: Response){
        try {
            const {
                id,
                cep,
                number,
                complement,
                value,
                bedrooms,
                avaliable
            }:propertiesData = req.body;
    
            if(!id){
                return res.status(403).send('You must write the id!')
            }
    
            const user_id = res.locals.user
    
            const properties = new propertiesService();
    
            const resp = await properties.updateProperty({
                id,
                user_id,
                cep,
                number,
                complement,
                value,
                bedrooms,
                avaliable
            });
    
            return res.json(resp)
        } catch (err) {
            return res.status(400).send({ data: err.message })
        }
    }
    async delete(req: Request, res: Response){
        try {
            const { id } = req.body;

            if(!id){
                return res.status(403).send('You should all fields')
            }

            const user_id = res.locals.user
            
            const properties = new propertiesService();

            const resp = await properties.deleteProperty({ id, user_id })

            return res.json(resp)
        } catch(err) {
            return res.status(400).send({ data: err.message })
        }
    }
}   

export { propertiesController }