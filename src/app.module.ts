// src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UserEntity } from './entity/user.entity';
import { ReportEntity } from './entity/report.entity';
import { PriorityEntity } from './entity/priority.entity';
import { CategoryEntity } from './entity/category.entity';
import { ReportModule } from './report/report.module';
import { CategoryModule } from './category/category.module';
import { PriorityModule } from './priority/priority.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db4free.net',
      port: 3306,
      username: 'lutitech',
      password: 'Luti4148',
      database: 'movittt',
      entities: [UserEntity, ReportEntity, CategoryEntity, PriorityEntity ],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    ReportModule,
    CategoryModule,
    PriorityModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1h' },
    }), 
  ],
})
export class AppModule {}
