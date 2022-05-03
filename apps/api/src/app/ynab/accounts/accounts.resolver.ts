import { Resolver } from '@nestjs/graphql';
import { AccountsService } from './accounts.service';

@Resolver()
export class AccountsResolver {
  constructor(private readonly accountsService: AccountsService) {}
}
