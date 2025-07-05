import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from 'lib/dtos/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'lib/entities/user.entity';
import { QueryFailedError, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository : Repository<User>){}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepository.create(createUserDto);
      return await this.userRepository.save(user);
    } catch (error) {
      if (
        error instanceof QueryFailedError &&
        (error as any).code === '23505'
      ) {
        // Unique constraint error in PostgreSQL
        throw new BadRequestException('Something Went Wrong');
      }

      // Other unexpected errors
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }


  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
