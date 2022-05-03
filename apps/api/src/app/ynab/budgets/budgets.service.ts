import { Injectable } from '@nestjs/common';
import { YnabApiService } from '../ynab-api/ynab-api.service';
import { BudgetSummaryResponse } from './budget-summary-response.model';
import { BudgetDetailResponse } from './budget-detail-response.model';

@Injectable()
export class BudgetsService {
  constructor(private readonly api: YnabApiService) {}

  public findAll(includeAccounts: boolean): Promise<BudgetSummaryResponse> {
    return this.api.instance.budgets.getBudgets(includeAccounts);
  }

  public findOne(id: string): Promise<BudgetDetailResponse> {
    return this.api.instance.budgets.getBudgetById(id);
  }
}
