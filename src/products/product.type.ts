import { ObjectType , Field, ID} from '@nestjs/graphql'


@ObjectType('product')
export class ImageType {
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    price: number;

    @Field()
    status: string;

    @Field()
    images: any[]
}