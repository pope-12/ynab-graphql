import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { ScheduledTransactionSummary as YNABScheduledTransactionSummary } from 'ynab';

registerEnumType(YNABScheduledTransactionSummary.FlagColorEnum, {
  name: 'FlagColor',
});

registerEnumType(YNABScheduledTransactionSummary.FrequencyEnum, {
  name: 'Frequency',
});

@ObjectType('ScheduledTransactionSummary')
export class ScheduledTransactionSummary implements YNABScheduledTransactionSummary {
  @Field()
  public id: string;

  @Field()
  public account_id: string;

  @Field(type => Int, {description: 'The scheduled transaction amount in milliunits format'})
  public amount: number;

  @Field()
  public date_first: string;

  @Field()
  public date_next: string;

  @Field()
  public deleted: boolean;

  @Field(type => YNABScheduledTransactionSummary.FrequencyEnum)
  public frequency: YNABScheduledTransactionSummary.FrequencyEnum;

  @Field({nullable: true})
  public category_id?: string | null;

  @Field(type => YNABScheduledTransactionSummary.FlagColorEnum, {nullable: true})
  public flag_color?: YNABScheduledTransactionSummary.FlagColorEnum | null;

  @Field({nullable: true})
  public memo?: string | null;

  @Field({nullable: true})
  public payee_id?: string | null;

  @Field({nullable: true})
  public transfer_account_id?: string | null;

}
