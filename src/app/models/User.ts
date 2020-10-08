import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { IsDefined,MinLength } from "class-validator";

export enum UserRole {
    ADMIN = "admin",
    EDITOR = "editor",
}
@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsDefined()
    @MinLength(6)
    name: string;

    @Column()
    email: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.EDITOR,
    })
    role: UserRole

    @Column({
        name:"is_active"
    })
    isActive: boolean;

}