// src/report/priority.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PriorityEntity } from '../entity/priority.entity';
import { PriorityDto } from 'src/dto/priorityDto';

@Injectable()
export class PriorityService {
  constructor(
    @InjectRepository(PriorityEntity)
    private priorityRepository: Repository<PriorityEntity>,
  ) {}

  async createPriority(priorityDto: PriorityDto) : Promise<PriorityEntity>{
    try {
      const newPriority = new PriorityEntity()
      newPriority.level = priorityDto.level
      const priority = await this.priorityRepository.save(newPriority)
      return priority
    } catch (error) {
      return error.message
    }
  }

  async findAll(): Promise<PriorityEntity[]> {
    return this.priorityRepository.find();
  }
}
