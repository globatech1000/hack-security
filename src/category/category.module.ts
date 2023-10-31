// src/report/category.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from '../entity/category.entity';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CategoryService],
  controllers: [CategoryController],
  exports: [CategoryService], // Export CategoryService to use it in other modules if needed
})
export class CategoryModule {}