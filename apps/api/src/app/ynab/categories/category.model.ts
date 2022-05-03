import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Category as YNABCategory } from 'ynab';


registerEnumType(YNABCategory.GoalTypeEnum, {
  name: 'GoalType',
});

@ObjectType('Category')
export class Category implements YNABCategory {
  @Field()
  public id: string;

  @Field()
  public name: string;

  @Field({description: 'Whether or not the category group is hidden'})
  public hidden: boolean;

  @Field(type => Int, {description: 'Activity amount in milliunits format'})
  public activity: number;

  @Field(type => Int, {description: 'Balance in milliunits format'})
  public balance: number;

  @Field(type => Int, {description: 'Budgeted amount in milliunits format'})
  public budgeted: number;

  @Field()
  public category_group_id: string;

  @Field({description: 'Whether or not the category group has been deleted. Deleted category groups will only be included in delta requests.'})
  public deleted: boolean;

  @Field({nullable: true})
  public note?: string | null;

  @Field({nullable: true})
  public original_category_group_id?: string | null;

  @Field({nullable: true})
  public goal_creation_month?: string | null;

  @Field(type => Int, {nullable: true, description: 'The number of months, including the current month, left in the current goal period.'})
  public goal_months_to_budget?: number | null;

  @Field(type => Int, {nullable: true, description: 'The total amount funded towards the goal within the current goal period.'})
  public goal_overall_funded?: number | null;

  @Field(type => Int, {nullable: true, description: 'The amount of funding still needed to complete the goal within the current goal period.'})
  public goal_overall_left?: number | null;

  @Field(type => Int, {nullable: true, description: 'The percentage completion of the goal'})
  public goal_percentage_complete?: number | null;

  @Field(type => Int, {nullable: true, description: 'The goal target amount in milliunits'})
  public goal_target?: number | null;

  @Field({nullable: true, description: 'The original target month for the goal to be completed. Only some goal types specify this date'})
  public goal_target_month?: string | null;

  @Field(type => YNABCategory.GoalTypeEnum, {nullable: true, description: 'The type of goal, if the category has a goal (TB=’Target Category Balance’, TBD=’Target Category Balance by Date’, MF=’Monthly Funding’, NEED=’Plan Your Spending’)'})
  public goal_type?: YNABCategory.GoalTypeEnum | null;

  @Field(type => Int, {
    nullable: true,
    description: 'The amount of funding still needed in the current month to stay on track towards completing the goal within the current goal period. This amount will generally correspond to the ‘Underfunded’ amount in the web and mobile clients except when viewing a category with a Needed for Spending Goal in a future month. The web and mobile clients will ignore any funding from a prior goal period when viewing category with a Needed for Spending Goal in a future month.'
  })
  public goal_under_funded?: number | null;
}
