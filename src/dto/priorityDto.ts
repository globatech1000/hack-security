// src/report/dto/priority.dto.ts

import { IsNotEmpty, IsString } from 'class-validator';

export class PriorityDto {
  @IsNotEmpty()
  @IsString()
  level: string;
}
