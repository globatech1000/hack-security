// src/report/report.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportDto } from 'src/dto/reportDto';

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get('getAllReports')
  async findAll() {
    return this.reportService.findAll();
  }

  @Post('createReport')
  async create(@Body() reportDto: ReportDto) {
    return this.reportService.create(reportDto);
  }
}
