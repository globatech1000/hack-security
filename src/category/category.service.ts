// src/report/category.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from '../entity/category.entity';
import { CategoryDto } from 'src/dto/categoryDto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}

  async createCategory(categoryDto: CategoryDto): Promise<CategoryEntity> {
    try {
      const newCategory = new CategoryEntity();
    newCategory.name = categoryDto.name;

    const category = await this.categoryRepository.save(newCategory);
    return category;
    } catch (error) {
      return error.message;
    }
  }

  async findAll(): Promise<CategoryEntity[]> {
    return this.categoryRepository.find();
  }
}
