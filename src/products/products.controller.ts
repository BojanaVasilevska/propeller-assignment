import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Controller('products')
export class ProductsController {
  productsService: any;
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts() {
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Post()
  async create(@Body() CreateProductInput: CreateProductInput) {
    return this.productsService.create(CreateProductInput);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() UpdateProductInput: UpdateProductInput) {
    return this.productsService.update(+id, UpdateProductInput);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}