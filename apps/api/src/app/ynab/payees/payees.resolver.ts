import { Resolver } from '@nestjs/graphql';
import { PayeesService } from './payees.service';

@Resolver()
export class PayeesResolver {
  constructor(private readonly payeesService: PayeesService) {}
}
