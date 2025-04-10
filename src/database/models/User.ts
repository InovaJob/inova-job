import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

import { entityUserInterface } from "../../interfaces/componentInterfaces/entity_user_cnpj";

@Entity('userCnpj')
export class UserCnpj implements entityUserInterface  {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    cnpj?: string;
    @Column()
    email?: string;
    @Column()
    phone: string;
    @Column()
    postalCode?: string;
    @Column()
    password: string;
    @Column()
    confirmPassword: string;

    constructor(id, )
} 