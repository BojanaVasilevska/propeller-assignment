import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateImageInput {
  @Field()
  url: string;

  @Field({ defaultValue: 1000 })
  priority: number;

}