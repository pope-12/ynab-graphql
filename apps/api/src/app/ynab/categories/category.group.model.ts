import { Field, ObjectType } from '@nestjs/graphql';
import { CategoryGroup as YNABCategoryGroup } from 'ynab';

@ObjectType('CategoryGroup')
export class CategoryGroup implements YNABCategoryGroup {
  @Field()
  public id: string;

  @Field()
  public name: string;

  @Field()
  public hidden: boolean;

  @Field({description: 'Whether or not the category group has been deleted. Deleted category groups will only be included in delta requests.'})
  public deleted: boolean;
}
