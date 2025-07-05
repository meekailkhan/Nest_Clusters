import { Controller, Get } from '@nestjs/common';
import { Service2Service } from './service2.service';

@Controller()
export class Service2Controller {
  constructor(private readonly service2Service: Service2Service) {}

  @Get()
  getHello(): string {
    return this.service2Service.getHello();
  }
}
