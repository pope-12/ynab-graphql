import { Module } from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { BudgetsResolver } from './budgets.resolver';
import { YnabApiModule } from '../ynab-api/ynab-api.module';

@Module({
  imports: [
    YnabApiModule
  ],
  providers: [BudgetsResolver, BudgetsService],
})
export class BudgetsModule {}
