import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateImageInput } from './dto/create-image.input';
import { UpdateImageInput } from './dto/update-image.input';
import { Image } from './image.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {}

  async findAll(): Promise<Image[]> {
    return this.imageRepository.find({ relations: ['product'] });
  }

  async findOne(id: number): Promise<Image> {
    return this.imageRepository.findOne({ where: { id } });
  }

  async create(input: CreateImageInput): Promise<Image> {
    const image = this.imageRepository.create(input);
    return this.imageRepository.save(image);
  }

  async update(id: number, input: UpdateImageInput): Promise<Image> {
    await this.imageRepository.update(id, input);
    return this.imageRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<Image> {
    const image = await this.imageRepository.findOne({ where: { id } });
    await this.imageRepository.delete(id);
    return image;
  }
}

