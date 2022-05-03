import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BudgetDetail } from './budget-detail.model';
import { BudgetDetailResponseData as YNABBudgetDetailResponseData } from 'ynab';

@ObjectType()
export class BudgetDetailResponseData implements YNABBudgetDetailResponseData {
  @Field(type => BudgetDetail)
  public budget: BudgetDetail;

  @Field(type => Int)
  public server_knowledge: number;
}
