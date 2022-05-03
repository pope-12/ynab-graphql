import { Module } from '@nestjs/common';
import { PayeesService } from './payees.service';
import { PayeesResolver } from './payees.resolver';

@Module({
  providers: [PayeesResolver, PayeesService],
})
export class PayeesModule {}
