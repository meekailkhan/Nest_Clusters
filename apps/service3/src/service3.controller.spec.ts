import { Test, TestingModule } from '@nestjs/testing';
import { Service3Controller } from './service3.controller';
import { Service3Service } from './service3.service';

describe('Service3Controller', () => {
  let service3Controller: Service3Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Service3Controller],
      providers: [Service3Service],
    }).compile();

    service3Controller = app.get<Service3Controller>(Service3Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(service3Controller.getHello()).toBe('Hello World!');
    });
  });
});
