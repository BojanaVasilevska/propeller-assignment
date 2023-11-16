import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductInput {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  price?: number;
}
