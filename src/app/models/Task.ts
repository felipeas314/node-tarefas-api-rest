import { Entity,PrimaryGeneratedColumn,Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity("tasks")
export class Task {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string

  @ManyToOne(type => User)
  @JoinColumn({name:"user_id"})
  user: User;
}