// src/report/category.controller.ts

import { Controller, Post, Body, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from '../dto/categoryDto';
import { CategoryEntity } from '../entity/category.entity';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('create')
  async createCategory(@Body() categoryDto: CategoryDto): Promise<CategoryEntity> {
    console.log(categoryDto)
    return this.categoryService.createCategory(categoryDto);
  }

  @Get('getAllCategories')
  async getAllCategories(): Promise<CategoryEntity[]> {
    return this.categoryService.findAll();
  }
}
