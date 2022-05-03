import { Field, ObjectType } from '@nestjs/graphql';
import { BudgetDetail as YNABBudgetDetail, } from 'ynab';
import { BudgetSummary } from './budget-summary.model';
import { Payee } from '../payees/payee.model';
import { Category } from '../categories/category.model';
import { CategoryGroup } from '../categories/category.group.model';
import { MonthDetail } from '../models/month-detail.model';
import { PayeeLocation } from '../payees/payee-location.model';
import { ScheduledSubTransaction } from '../transactions/scheduled-sub-transaction.model';
import { ScheduledTransactionSummary } from '../transactions/scheduled-transaction-summary.model';
import { SubTransaction } from '../transactions/sub-transaction.model';
import { TransactionSummary } from '../transactions/transaction-summary.model';

@ObjectType()
export class BudgetDetail extends BudgetSummary implements YNABBudgetDetail {
  @Field(type => [Payee], { nullable: true })
  public payees?: Array<Payee> | null;

  @Field(type => [Category], { nullable: true })
  public categories?: Array<Category> | null;

  @Field(type => [CategoryGroup], { nullable: true })
  public category_groups?: Array<CategoryGroup> | null;

  @Field(type => [MonthDetail], { nullable: true })
  public months?: Array<MonthDetail> | null;

  @Field(type => [PayeeLocation], { nullable: true })
  public payee_locations?: Array<PayeeLocation> | null;

  @Field(type => [ScheduledSubTransaction], { nullable: true })
  public scheduled_subtransactions?: Array<ScheduledSubTransaction> | null;

  @Field(type => [ScheduledTransactionSummary], { nullable: true })
  public scheduled_transactions?: Array<ScheduledTransactionSummary> | null;

  @Field(type => [SubTransaction], { nullable: true })
  public subtransactions?: Array<SubTransaction> | null;

  @Field(type => [TransactionSummary], { nullable: true })
  public transactions?: Array<TransactionSummary> | null;
}
