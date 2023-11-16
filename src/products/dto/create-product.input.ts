import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductInput {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}