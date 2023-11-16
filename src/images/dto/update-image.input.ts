import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateImageInput {
  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsNumber()
  priority?: number;
}