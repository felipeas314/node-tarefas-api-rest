import { JsonController, Param, Body, Get, Post, Put, Delete, Req, Res } from "routing-controllers";
import { Request, Response } from "express";
import {getRepository, Repository} from "typeorm";

import { Task } from '../models/Task';

@JsonController("/tasks")
export class TaskController {
  
  private taskRepository: Repository<Task>;

  constructor(){
    this.taskRepository = getRepository(Task);
  }

  @Get()
  async getAll(@Res() response: Response){
    return await this.taskRepository.find({ relations: ["user"] });
  }

  @Post()
  async create(@Body({validate:true}) task:Task, @Res() response: Response ){
    const taskCriada = await this.taskRepository.save(task);
    return response.status(201).json({message:'ok'});
  }
}