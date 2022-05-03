import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CurrencyFormat as YNABCurrencyFormat } from 'ynab';

@ObjectType('CurrencyFormat',
  {description: 'The currency format setting for the budget.  In some cases the format will not be available and will be specified as null.'}
)
export class CurrencyFormat implements YNABCurrencyFormat {
  @Field()
  public currency_symbol: string;

  @Field(type => Int)
  public decimal_digits: number;

  @Field()
  public decimal_separator: string;

  @Field()
  public display_symbol: boolean;

  @Field()
  public example_format: string;

  @Field()
  public group_separator: string;

  @Field()
  public iso_code: string;

  @Field()
  public symbol_first: boolean;
}
