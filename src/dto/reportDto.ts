// src/dto/reportDto.ts

export class ReportDto {
    subject: string;
    message: string;
    category: number; // Assuming the category is an ID (number)
    priority: number; // Assuming the priority is an ID (number)
    user?: number; // Optional: Assuming the user is an ID (number)
  }
  