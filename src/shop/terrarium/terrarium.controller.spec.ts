import { Test, TestingModule } from '@nestjs/testing';
import { TerrariumController } from './terrarium.controller';

describe('TerrariumController', () => {
  let controller: TerrariumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TerrariumController],
    }).compile();

    controller = module.get<TerrariumController>(TerrariumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
