import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find({ relations: ['images'] });
  }

  async findOne(id: number): Promise<Product> {
    return this.productRepository.findOne({ where: { id } });
  }
  
  async create(input: CreateProductInput): Promise<Product> {
    const product = this.productRepository.create(input);
    return this.productRepository.save(product);
  }

  async update(id: number, input: UpdateProductInput): Promise<Product> {
    await this.productRepository.update(id, input);
    return this.productRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    await this.productRepository.delete(id);
    return product;
  }
}
