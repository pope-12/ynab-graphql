import { Test, TestingModule } from '@nestjs/testing';
import { YnabApiService } from './ynab-api.service';

describe('YnabApiService', () => {
  let service: YnabApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YnabApiService],
    }).compile();

    service = module.get<YnabApiService>(YnabApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
