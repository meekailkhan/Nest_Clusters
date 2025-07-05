import { Module } from '@nestjs/common';
import { Service3Controller } from './service3.controller';
import { Service3Service } from './service3.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'lib/entities/user.entity';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })
    ,
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_SERVICE03,
    entities: [User],
    synchronize: true

  })
    , UserModule],
  controllers: [Service3Controller],
  providers: [Service3Service],
})
export class Service3Module { }
