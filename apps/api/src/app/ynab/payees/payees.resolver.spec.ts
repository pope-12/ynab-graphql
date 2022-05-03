import { Test, TestingModule } from '@nestjs/testing';
import { PayeesResolver } from './payees.resolver';
import { PayeesService } from './payees.service';

describe('PayeesResolver', () => {
  let resolver: PayeesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayeesResolver, PayeesService],
    }).compile();

    resolver = module.get<PayeesResolver>(PayeesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
