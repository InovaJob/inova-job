import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

import { TypeEntityUserCnpj } from "@/types/entity_types/entity.user.cnpj";

@Entity('userCnpj')
export class UserCnpj  {
    constructor({ id, name, cnpj, email, phone, postalCode, password, confirmPassword }: TypeEntityUserCnpj) {
        this.id = id;
        this.name = name;
        this.cnpj = cnpj;
        this.email = email;
        this.phone = phone;
        this.postalCode = postalCode;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
    
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    cnpj: string;
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

} 