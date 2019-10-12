import { Min } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class VPagination {
  @Field(type => Int, { nullable: true })
  @Min(1)
  page: number = 1;

  @Field(type => Int, { nullable: true })
  @Min(1)
  perPage: number = 10;
}
