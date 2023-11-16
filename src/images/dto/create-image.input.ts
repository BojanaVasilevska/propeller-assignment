import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateImageInput {
  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsNumber()
  priority: number;
}