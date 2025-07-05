import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { User } from 'lib/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true
    }),
    TypeOrmModule.forRoot({
      type : 'postgres',
      host : process.env.DATABASE_HOST,
      port : 5432,
      username : process.env.DATABASE_USERNAME,
      password : process.env.DATABASE_PASSWORD,
      database : process.env.DATABASE_SERVICE01,
      entities : [User],
      synchronize : true

    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
