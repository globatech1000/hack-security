// src/report/report.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportEntity } from '../entity/report.entity';
import { ReportDto } from 'src/dto/reportDto';
import { CategoryEntity } from '../entity/category.entity';
import { PriorityEntity } from '../entity/priority.entity';
import { UserEntity } from '../entity/user.entity';


@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(ReportEntity)
    private reportRepository: Repository<ReportEntity>,
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
    @InjectRepository(PriorityEntity)
    private priorityRepository: Repository<PriorityEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(reportDto: ReportDto): Promise<ReportEntity> {
    const newReport = new ReportEntity();
    newReport.subject = reportDto.subject;
    newReport.message = reportDto.message;

    // Find the CategoryEntity and set it in the ReportEntity
    const category = await this.categoryRepository.findOne({where: {id: reportDto.category}});
    if (!category) {
       throw new Error("Category not found")
    }
    newReport.category = category;

    // Find the PriorityEntity and set it in the ReportEntity
    const priority = await this.priorityRepository.findOne({where: {id: reportDto.priority}});
    if (!priority) {
      throw new Error("Priority not found")
    }
    newReport.priority = priority;

    // Find the UserEntity and set it in the ReportEntity (optional)
    if (reportDto.user !== undefined) {
      const user = await this.userRepository.findOne({where: {id: reportDto.user}});
      if (!user) {
        throw new Error("user not found")
      }
      newReport.user = user;
    }

    return this.reportRepository.save(newReport);
  }

  async findAll(): Promise<ReportEntity[]> {
    return this.reportRepository.find();
  }
}
