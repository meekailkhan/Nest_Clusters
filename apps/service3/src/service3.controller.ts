import { Controller, Get } from '@nestjs/common';
import { Service3Service } from './service3.service';

@Controller()
export class Service3Controller {
  constructor(private readonly service3Service: Service3Service) {}

  @Get()
  getHello(): string {
    return this.service3Service.getHello();
  }
}
