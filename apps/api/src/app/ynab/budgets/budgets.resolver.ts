import { Args, Query, Resolver } from '@nestjs/graphql';
import { BudgetsService } from './budgets.service';
import { BudgetSummaryResponse } from './budget-summary-response.model';
import { BudgetDetailResponse } from './budget-detail-response.model';

@Resolver()
export class BudgetsResolver {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Query(type => BudgetSummaryResponse)
  budgetsSummary(@Args({nullable: true, name: 'include_accounts'}) includeAccounts: boolean): Promise<BudgetSummaryResponse> {
    return this.budgetsService.findAll(includeAccounts);
  }

  @Query(type => BudgetDetailResponse)
  budget(@Args({nullable: true, name: 'id'}) id: string): Promise<BudgetDetailResponse> {
    return this.budgetsService.findOne(id);
  }
}
