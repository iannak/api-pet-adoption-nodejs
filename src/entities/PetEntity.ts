import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import EnumEspecie from "../enum/EnumEspecie";
import AdopterEntity from "./AdopterEntity";

@Entity()
export default class PetEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name: string;
  @Column()
  especie: EnumEspecie;
  @Column()
  dataBirth: Date;
  @Column({ default: false })
  adopted: boolean;
  @ManyToOne(() => AdopterEntity, (adopter) => adopter.pets)
  adopter!: AdopterEntity;
  constructor(
    name: string,
    especie: EnumEspecie,
    dataBirth: Date,
    adopted: boolean
  ) {
    this.name = name;
    this.especie = especie;
    this.dataBirth = dataBirth;
    this.adopted = adopted;
  }
}
