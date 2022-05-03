import { Field, ObjectType } from '@nestjs/graphql';
import { BudgetSummary } from './budget-summary.model';
import { BudgetSummaryResponseData as YNABBudgetSummaryResponseData } from 'ynab/dist/api';

@ObjectType()
export class BudgetSummaryResponseData implements YNABBudgetSummaryResponseData {
  @Field(type => [BudgetSummary])
  budgets: BudgetSummary[];

  @Field(type => BudgetSummary)
  default_budget?: BudgetSummary;
}
