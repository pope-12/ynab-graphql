import { Field, Float, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Account as YNABAccount } from 'ynab';


registerEnumType(YNABAccount.TypeEnum, {
  name: 'AccountType',
});

@ObjectType('Account')
export class Account implements YNABAccount {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  last_modified_on?: string;

  @Field(() => Float, { nullable: true, })
  public balance: number;

  @Field(() => Float, { nullable: true, })
  public cleared_balance: number;

  @Field(() => Float, { nullable: true, })
  public uncleared_balance: number;

  @Field({ nullable: true })
  public closed: boolean;

  @Field({ nullable: true })
  public deleted: boolean;

  @Field({ nullable: true })
  public on_budget: boolean;

  @Field({ nullable: true })
  public transfer_payee_id: string;

  @Field(() => YNABAccount.TypeEnum, { nullable: true })
  public type: YNABAccount.TypeEnum;
}
