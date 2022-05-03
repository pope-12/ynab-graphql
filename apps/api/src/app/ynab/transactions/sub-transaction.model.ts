import { Field, Int, ObjectType } from '@nestjs/graphql';
import { SubTransaction as YNABSubTransaction } from 'ynab';

@ObjectType('SubTransaction')
export class SubTransaction implements YNABSubTransaction {
  @Field()
  public id: string;

  @Field()
  public transaction_id: string;

  @Field(type => Int)
  public amount: number;

  @Field()
  public deleted: boolean;

  @Field({nullable: true})
  public category_id?: string | null;

  @Field({nullable: true})
  public category_name?: string | null;

  @Field({nullable: true})
  public memo?: string | null;

  @Field({nullable: true})
  public payee_id?: string | null;

  @Field({nullable: true})
  public payee_name?: string | null;

  @Field({nullable: true})
  public transfer_account_id?: string | null;

  @Field({nullable: true})
  public transfer_transaction_id?: string | null;
}
