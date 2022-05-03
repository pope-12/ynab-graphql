import { Field, ObjectType } from '@nestjs/graphql';
import { Account } from '../accounts/account.model';
import { BudgetSummary as YNABBudgetSummary } from 'ynab';
import { CurrencyFormat } from '../formats/currency-format.model';
import { DateFormat } from '../formats/date-format.model';

@ObjectType()
export class BudgetSummary implements YNABBudgetSummary {
  @Field()
  public id: string;

  @Field()
  public name: string;

  @Field(type => [Account], {nullable: true})
  public accounts?: Account[];

  @Field(type => CurrencyFormat, {nullable: true})
  public currency_format?: CurrencyFormat | null;

  @Field(type => DateFormat, {nullable: true})
  public date_format?: DateFormat | null;

  @Field({nullable: true})
  public first_month?: string | null;

  @Field({nullable: true})
  public last_modified_on?: string | null;

  @Field({nullable: true})
  public last_month?: string | null;
}
