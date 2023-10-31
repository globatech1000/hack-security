// src/report/report.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportEntity } from '../entity/report.entity';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { CategoryEntity } from '../entity/category.entity'; // Import the CategoryEntity
import { PriorityEntity } from '../entity/priority.entity'; // Import the PriorityEntity
import { UserEntity } from '../entity/user.entity'; // Import the UserEntity

@Module({
  imports: [
    TypeOrmModule.forFeature([ReportEntity, CategoryEntity, PriorityEntity, UserEntity]), // Add CategoryEntity to the forFeature array
  ],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
