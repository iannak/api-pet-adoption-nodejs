

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class AddressEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  city: string;
  @Column()
  state: string;
  @Column()
  street: string;
  @Column()
  number: number;
  @Column()
  complement: string;
  @Column()
  neighborhood: string;
  @Column()
  zipCode: string;

  constructor(city: string, state: string, street: string, number: number, complement: string, neighborhood: string, zipCode: string) {
    this.city = city;
    this.state = state;
    this.street = street;
    this.number = number;
    this.complement = complement;
    this.neighborhood = neighborhood;
    this.zipCode = zipCode;
  }
}
