import {
    Entity,
    PrimaryColumn,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    Column,
} from 'typeorm';

import { v4 as uuid } from 'uuid';
import { User } from './User'

@Entity("properties")
class Property {
    @PrimaryColumn()
    id: string;

    @JoinColumn({ name: "user_id"})
    @ManyToOne(() => User)
    user: User;

    @Column()
    user_id: string;

    @Column()
    cep: string;

    @Column()
    number: string;

    @Column()
    complement: string;

    @Column()
    value: string;  

    @Column()
    bedrooms: string;

    @Column()
    avaliable: boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        !this.id ? this.id = uuid() : this.id
    }
}

export { Property }