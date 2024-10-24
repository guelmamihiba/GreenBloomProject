import { Test, TestingModule } from '@nestjs/testing';
import { HomeWareDecorController } from './home_ware_decor.controller';

describe('HomeWareDecorController', () => {
  let controller: HomeWareDecorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeWareDecorController],
    }).compile();

    controller = module.get<HomeWareDecorController>(HomeWareDecorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
