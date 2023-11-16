import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Image } from 'src/images/image.entity'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column({ default: 'active' })
  status: string;

  @OneToMany(() => Image, (image) => image.product)
  images: Image[];
}
