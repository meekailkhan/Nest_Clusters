import { Module } from '@nestjs/common';
import { Service2Controller } from './service2.controller';
import { Service2Service } from './service2.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'lib/entities/user.entity';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_SERVICE02,
    entities: [User],
    synchronize: true

  }), UserModule],
  controllers: [Service2Controller],
  providers: [Service2Service],
})
export class Service2Module { }
