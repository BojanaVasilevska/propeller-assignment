import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ImageService } from './images.service';
import { CreateImageInput } from './dto/create-image.input';
import { UpdateImageInput } from './dto/update-image.input';

@Controller('images')
export class ImagesController {
  imagesService: any;
  constructor(private readonly imageService: ImageService) {}

  @Get()
  async getImages() {
    return this.imageService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.imagesService.findOne(+id);
  }

  @Post()
  async create(@Body() createImageInput: CreateImageInput) {
    return this.imagesService.create(createImageInput);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateImageDto: UpdateImageInput) {
    return this.imagesService.update(+id, updateImageDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.imagesService.remove(+id);
  }
}
