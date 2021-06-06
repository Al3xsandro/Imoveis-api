import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    BeforeInsert,
    BeforeUpdate
} from 'typeorm';

import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs';

@Entity("Users")
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    email: string;

    @Column()
    password: string;
    
    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8)
    }

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        // generate uuid for user
        !this.id ? this.id = uuid() : this.id
    }
}

export { User }