import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import {
  ScheduledTransactionSummary as YNABScheduledTransactionSummary,
  TransactionSummary as YNABTransactionSummary
} from 'ynab';

registerEnumType(YNABTransactionSummary.ClearedEnum, {
  name: 'Cleared',
});

@ObjectType('TransactionSummary')
export class TransactionSummary implements YNABTransactionSummary {
  @Field()
  public id: string;

  @Field()
  public account_id: string;

  @Field(type => Int)
  public amount: number;

  @Field()
  public approved: boolean;

  @Field(type => YNABTransactionSummary.ClearedEnum)
  public cleared: YNABTransactionSummary.ClearedEnum;

  @Field()
  public date: string;

  @Field()
  public deleted: boolean;

  @Field(type => YNABScheduledTransactionSummary.FlagColorEnum, {nullable: true})
  public flag_color?: YNABScheduledTransactionSummary.FlagColorEnum | null;

  @Field({nullable: true})
  public category_id?: string | null;

  @Field({nullable: true})
  public import_id?: string | null;

  @Field({nullable: true})
  public matched_transaction_id?: string | null;

  @Field({nullable: true})
  public memo?: string | null;

  @Field({nullable: true})
  public payee_id?: string | null;

  @Field({nullable: true})
  public transfer_account_id?: string | null;

  @Field({nullable: true})
  public transfer_transaction_id?: string | null;
}
