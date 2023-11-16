import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './products.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './product.entity';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Query(() => Product, { nullable: true })
  async product(@Args('id') id: number): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Mutation(() => Product)
  async createProduct(@Args('input') input: CreateProductInput): Promise<Product> {
    return this.productService.create(input);
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('id') id: number,
    @Args('input') input: UpdateProductInput,
  ): Promise<Product> {
    return this.productService.update(id, input);
  }

  @Mutation(() => Product)
  async deleteProduct(@Args('id') id: number): Promise<Product> {
    return this.productService.delete(id);
  }
}
