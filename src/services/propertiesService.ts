import { Repository, getCustomRepository } from 'typeorm';

import { Property } from '../entities/Properties';
import { PropertiesRepository } from '../repositories/propertiesRepository';

interface propertyData {
    user_id: string;
    cep: string;
    number: string;
    complement: string;
    value: string;
    bedrooms: string;
    avaliable: boolean;
}

class propertiesService {
    private propertiesRepository: Repository<Property>
    constructor(){
        this.propertiesRepository = getCustomRepository(PropertiesRepository);
    }

    async create({
        user_id,
        cep,
        number,
        complement,
        value,
        bedrooms,
        avaliable
    }:propertyData) {
        const propertyExists = await this.propertiesRepository.findOne({
            cep,
            number
        })

        if(propertyExists){
            return 'This immobile was exists'
        }

        const property = this.propertiesRepository.create({
            user_id,
            cep,
            number,
            complement,
            value,
            bedrooms,
            avaliable
        });

        await this.propertiesRepository.save(property);

        return property
    }

    async getProperties({ user_id, cep }){
        const property = await this.propertiesRepository.find({
            where: { user_id }
        })

        return property
    }
}

export { propertiesService }