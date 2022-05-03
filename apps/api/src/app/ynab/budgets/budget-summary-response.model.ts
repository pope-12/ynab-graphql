import { Field, ObjectType } from '@nestjs/graphql';
import { BudgetSummaryResponseData } from './budget-summary-response-data.model';
import { BudgetSummaryResponse as YNABBudgetSummaryResponse } from 'ynab';

@ObjectType()
export class BudgetSummaryResponse implements YNABBudgetSummaryResponse {
  @Field(type => BudgetSummaryResponseData)
  data: BudgetSummaryResponseData;

  @Field({nullable: true})
  rateLimit: string | null;
}
