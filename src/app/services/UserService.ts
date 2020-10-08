import { ResponseDTO } from '../dto/ResponseDTO';
import { User } from '../models/User';

import {validate } from 'class-validator';
export class UserService {

  constructor(){

  }

  async create(user: User) : Promise<ResponseDTO<User>> {
    await validate(user);
    const response = new ResponseDTO<User>("asd","wer",user);
    return response;
  }

}