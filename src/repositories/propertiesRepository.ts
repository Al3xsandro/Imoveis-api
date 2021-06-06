import { EntityRepository, Repository } from "typeorm";
import { Property } from '../entities/Properties';

@EntityRepository(Property)
class PropertiesRepository extends Repository<Property>{
}

export { PropertiesRepository };