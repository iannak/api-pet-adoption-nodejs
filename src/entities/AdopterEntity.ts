import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import AddressEntity from "./AddressEntity";
import PetEntity from "./PetEntity";

@Entity()
export default class AdopterEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  phone: string;
  @Column({ nullable: true })
  photo?: string;

  @OneToOne(() => AddressEntity, {
    nullable: true,
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  address?: AddressEntity;
  @OneToMany(() => PetEntity, (pet) => pet.adopted)
  pets!: PetEntity[];

  constructor(
    name: string,
    password: string,
    phone: string,
    photo?: string,
    address?: AddressEntity
  ) {
    this.name = name;
    this.password = password;
    this.photo = photo;
    this.phone = phone;
    this.address = address;
  }
}