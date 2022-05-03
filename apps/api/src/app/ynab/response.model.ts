import { Field, InterfaceType } from '@nestjs/graphql';

@InterfaceType({isAbstract: true})
export abstract class Response<T> {
  abstract data: T;

  @Field({nullable: true})
  public rateLimit: string | null;
}
