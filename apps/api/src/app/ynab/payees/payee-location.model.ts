import { Field, ObjectType } from '@nestjs/graphql';
import { PayeeLocation as YNABPayeeLocation } from 'ynab';

@ObjectType('PayeeLocation')
export class PayeeLocation implements YNABPayeeLocation {
  @Field()
  public id: string;

  @Field()
  public payee_id: string;

  @Field()
  public latitude: string;

  @Field()
  public longitude: string;

  @Field({description: 'Whether or not the payee location has been deleted. Deleted payee locations will only be included in delta requests.'})
  public deleted: boolean;
}
