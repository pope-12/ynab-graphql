import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MonthDetail as YNABMonthDetail } from 'ynab';
import { Category } from '../categories/category.model';

@ObjectType('MonthDetail')
export class MonthDetail implements YNABMonthDetail {
  @Field(type => Int, {description: 'The total amount of transactions in the month, excluding those categorized to ‘Inflow: Ready to Assign'})
  public activity: number;

  @Field(type => Int, {description: 'The total amount budgeted in the month'})
  public budgeted: number;

  @Field(type => [Category], {description: 'The budget month categories. Amounts (budgeted, activity, balance, etc.) are specific to the {month} parameter specified.'})
  public categories: Array<Category>;

  @Field()
  public deleted: boolean;

  @Field(type => Int, {description: 'The total amount of transactions categorized to ‘Inflow: Ready to Assign’ in the month'})
  public income: number;

  @Field()
  public month: string;

  @Field(type => Int, {description: 'The available amount for ‘Ready to Assign’'})
  public to_be_budgeted: number;

  @Field({nullable: true})
  public note?: string | null;

  @Field(type => Int, {nullable: true, description: 'The Age of Money as of the month'})
  public age_of_money?: number | null;
}
