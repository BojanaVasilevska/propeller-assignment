import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from '../products/product.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Image {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  url: string;

  @Field()
  @Column({ default: 1000 })
  priority: number;

  @Field(() => [Product], { nullable: true })
  @ManyToOne(() => Product, (product) => product.images)
  product: Product;
}