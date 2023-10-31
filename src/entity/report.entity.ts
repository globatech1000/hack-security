// src/report/report.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { PriorityEntity } from './priority.entity';
import { CategoryEntity } from './category.entity';

@Entity()
export class ReportEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject: string;

  @Column()
  message: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => UserEntity, user => user.reports)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(() => PriorityEntity)
  @JoinColumn({ name: 'priority_id' })
  priority: PriorityEntity;

  @ManyToOne(() => CategoryEntity)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;
}
