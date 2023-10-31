// src/report/priority.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriorityEntity } from '../entity/priority.entity';
import { PriorityService } from './priority.service';
import { PriorityController } from './priority.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PriorityEntity])],
  providers: [PriorityService],
  controllers: [PriorityController],
  exports: [PriorityService], // Export PriorityService to use it in other modules if needed
})
export class PriorityModule {}
