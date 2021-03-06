import { Repository, getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/userRepository';

interface User {
    name: string;
    cpf: string;
    email: string;
    password: string;
}

class userService {
    private userRepository: Repository<User>
    constructor() {
        this.userRepository = getCustomRepository(UserRepository);
    }

    async create({ name, cpf, email, password }: User) {
        const userExists = await this.userRepository.findOne({
            email,
            cpf
        });

        // Caso o usuário existir.
        if(userExists){
            throw new Error('This user already exists');
        }
        
        // Caso não existir.

        const user = this.userRepository.create({
            name,
            cpf,
            email,
            password
        });

        await this.userRepository.save(user)

        delete user.password

        return user;
    }
}

export { userService }