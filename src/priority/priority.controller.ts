// src/report/priority.controller.ts

import { Controller, Get, Body, Post } from '@nestjs/common';
import { PriorityService } from './priority.service';
import { PriorityDto } from 'src/dto/priorityDto';
import { PriorityEntity } from 'src/entity/priority.entity';

@Controller('priorities')
export class PriorityController {
  constructor(private readonly priorityService: PriorityService) {}

  @Post('create')
  async createCategory(@Body() prioritydto: PriorityDto): Promise<PriorityEntity> {
    console.log(prioritydto)
    return this.priorityService.createPriority(prioritydto);
  }

  @Get('allPriority')
  async findAll() {
    return this.priorityService.findAll();
  }
}
