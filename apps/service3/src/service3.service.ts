import { Injectable } from '@nestjs/common';

@Injectable()
export class Service3Service {
  getHello(): string {
    return 'Hello World!';
  }
}
