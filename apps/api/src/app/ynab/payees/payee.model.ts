import { Field, ObjectType } from '@nestjs/graphql';
import { Payee as YNABPayee } from 'ynab';

@ObjectType('Payee')
export class Payee implements YNABPayee {
  @Field()
  public id: string;

  @Field()
  public name: string;

  @Field({description: 'Whether or not the payee has been deleted.  Deleted payees will only be included in delta requests.'})
  public deleted: boolean;

  @Field({nullable: true, description: 'If a transfer payee, the `account_id` to which this payee transfers to'})
  public transfer_account_id?: string | null;
}
