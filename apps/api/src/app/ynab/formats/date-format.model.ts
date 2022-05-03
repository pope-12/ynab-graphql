import { Field, ObjectType } from '@nestjs/graphql';
import { DateFormat as YNABDateFormat } from 'ynab';

@ObjectType('DateFormat',
  {description: 'The date format setting for the budget.  In some cases the format will not be available and will be specified as null.'}
)
export class DateFormat implements YNABDateFormat {
  @Field({nullable: true})
  public format: string;
}
