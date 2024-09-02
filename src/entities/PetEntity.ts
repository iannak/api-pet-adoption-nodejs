import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import EnumEspecie from "../enum/EnumEspecie";
import AdopterEntity from "./AdopterEntity";
import EnumSize from "../enum/EnumSize";

@Entity()
export default class PetEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name: string;
  @Column()
  especie: EnumEspecie;
  @Column()
  size?: EnumSize;
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
    adopted: boolean,
    size?: EnumSize,
  ) {
    this.name = name;
    this.especie = especie;
    this.size = size;
    this.dataBirth = dataBirth;
    this.adopted = adopted;
  }
}
