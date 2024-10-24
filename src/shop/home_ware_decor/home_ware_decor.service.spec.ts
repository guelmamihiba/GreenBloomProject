import { Test, TestingModule } from '@nestjs/testing';
import { HomeWareDecorService } from './home_ware_decor.service';

describe('HomeWareDecorService', () => {
  let service: HomeWareDecorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeWareDecorService],
    }).compile();

    service = module.get<HomeWareDecorService>(HomeWareDecorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
