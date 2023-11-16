import { Controller, Get } from '@nestjs/common';
import { ImageService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private readonly imageService: ImageService) {}

  @Get()
  async getImages() {
    return this.imageService.findAll();
  }
}
