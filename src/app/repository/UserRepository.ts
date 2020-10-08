import { EntityRepository, Repository, getRepository } from "typeorm";

import { User } from '../models/User';



@EntityRepository(User)
export class EntityRepository extends Repository<User> {

}