import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ScheduledSubTransaction as YNABScheduledSubTransaction } from 'ynab';

@ObjectType('ScheduledSubTransaction')
export class ScheduledSubTransaction implements YNABScheduledSubTransaction {
  @Field()
  id: string;

  @Field()
  scheduled_transaction_id: string;

  @Field(type => Int, {description: 'The subtransaction amount in milliunits format'})
  amount: number;

  @Field({nullable: true})
  memo?: string;

  @Field({nullable: true})
  payee_id?: string;

  @Field({nullable: true})
  category_id?: string;

  @Field({nullable: true})
  transfer_account_id?: string;

  @Field()
  deleted: boolean;
}
