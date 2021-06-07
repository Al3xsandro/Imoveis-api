import { Repository, getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/userRepository';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import * as dotenv from 'dotenv';
dotenv.config()

interface User {
    id: string;
    email: string;
    password: string;
}

class authService {
    private userRepository: Repository<User>
    constructor() {
        this.userRepository = getCustomRepository(UserRepository);
    }

    async auth(email: string, password: string){
        const user = await this.userRepository.findOne({
            email
        })

        if(!user){
            return 'Invalid user or password'
        }

        const isValidPassword = await bcrypt.compare(password, user.password)

        if(!isValidPassword){
            return 'Invalid user or password'
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_KEY, { expiresIn: 8000});

        delete user.password

        return { user, token }
    }
}

export { authService }