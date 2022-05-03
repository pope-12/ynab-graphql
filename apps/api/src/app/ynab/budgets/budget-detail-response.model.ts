import { Field, ObjectType } from '@nestjs/graphql';
import { Response } from '../response.model';
import { BudgetDetailResponse as YNABBudgetDetailResponse } from 'ynab';
import { BudgetDetailResponseData } from './budget-detail-response-data.model';

@ObjectType()
export class BudgetDetailResponse extends Response<BudgetDetailResponseData> implements YNABBudgetDetailResponse {
  @Field(type => BudgetDetailResponseData)
  data: BudgetDetailResponseData;
}
