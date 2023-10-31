// src/entity/priority.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ReportEntity } from './report.entity';

@Entity()
export class PriorityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  level: string;

  @OneToMany(() => ReportEntity, report => report.priority)
  reports: ReportEntity[];
}
