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

type userData = {
    user_id: string;
    id: string;
}

class propertiesService {
    private propertiesRepository: Repository<Property>
    constructor(){
        this.propertiesRepository = getCustomRepository(PropertiesRepository);
    }

    // Show properties
    async getAllProperties(){
        const property = await this.propertiesRepository.find()

        delete property[0].user_id

        return property
    }

    async searchProperty(cep){

        const property = await this.propertiesRepository.find({
            where: { cep }
        })

        if(!property){
            return 'An error was occurred'
        }

        return property
    }

    // Config properties

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
            return 'This property already exists'
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

    async updateProperty(){
        return   
    }

    async deleteProperty({ id, user_id }:userData){
        const idExists = this.propertiesRepository.findOne({
            id,
            user_id
        });

        if(!idExists){
            return 'An error has occurred'
        }

        const deleteProperty = await this.propertiesRepository.delete({
            id
        })

        if(!deleteProperty.affected){
            return 'An error has occurred'
        }

        return 'deleted with success'
    }
}

export { propertiesService }