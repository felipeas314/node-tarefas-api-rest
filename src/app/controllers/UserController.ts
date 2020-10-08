import { JsonController, Param, Body, Get, Post, Put, Delete, Req, Res } from "routing-controllers";
import { Request, Response } from "express";
import { ResponseDTO } from '../dto/ResponseDTO';
import {getRepository, Repository} from "typeorm";
import { validate } from 'class-validator';
import { User } from '../models/User';

@JsonController("/users")
export class UserController {

   private userRepository: Repository<User>;

   constructor(){
      this.userRepository = getRepository(User);
   }

    @Get()
    async getAll() {
      return await this.userRepository.find();
    }

    @Get("/:id")
    getOne(@Param("id") id: number) {
       return "This action returns user #" + id;
    }

    @Post()
    async post(@Body({validate:true}) user: User, @Res() response: Response) {
      await this.userRepository.save(user);  

      const responseDTO = new ResponseDTO<User>("qwer","asdf",user);

      return response.status(201).json(responseDTO);
    }

    @Put("/:id")
    put(@Param("id") id: number, @Body() user: User) {
       return "Updating a user...";
    }

    @Delete("/:id")
    remove(@Param("id") id: number) {
       return "Removing user...";
    }

}