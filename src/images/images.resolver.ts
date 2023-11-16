import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ImageService } from './images.service';
import { CreateImageInput } from './dto/create-image.input';
import { UpdateImageInput } from './dto/update-image.input';
import { Image } from './image.entity';

@Resolver(() => Image)
export class ImagesResolver {
  constructor(private readonly imageService: ImageService) {}

  @Query(() => [Image])
  async images(): Promise<Image[]> {
    return this.imageService.findAll();
  }

  @Query(() => Image, { nullable: true })
  async image(@Args('id') id: number): Promise<Image> {
    return this.imageService.findOne(id);
  }

  @Mutation(() => Image)
  async createImage(@Args('input') input: CreateImageInput): Promise<Image> {
    return this.imageService.create(input);
  }

  @Mutation(() => Image)
  async updateImage(
    @Args('id') id: number,
    @Args('input') input: UpdateImageInput,
  ): Promise<Image> {
    return this.imageService.update(id, input);
  }

  @Mutation(() => Image)
  async deleteImage(@Args('id') id: number): Promise<Image> {
    return this.imageService.delete(id);
  }
}

