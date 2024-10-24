import { Test, TestingModule } from '@nestjs/testing';
import { TerrariumService } from './terrarium.service';

describe('TerrariumService', () => {
  let service: TerrariumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TerrariumService],
    }).compile();

    service = module.get<TerrariumService>(TerrariumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
