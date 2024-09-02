import { Request, Response } from "express";
import PetEntity from "../entities/PetEntity";
import EnumEspecie from "../enum/EnumEspecie";
import PetRepository from "../repositories/PetRepository";
import type TypePet from "../types/TypePet";

let listPets: Array<TypePet> = [];

let id = 0;
function geraId() {
  id = id + 1;
  return id;
}

export default class PetController {
  constructor(private repository: PetRepository) {}
  createPet(req: Request, res: Response) {
    const { adotado, especie, dataBirth, name } = <PetEntity>req.body;

    if (!Object.values(EnumEspecie).includes(especie)) {
      return res.status(400).json({ error: "Especie inválida" });
    }

    const newPet = new PetEntity();
    (newPet.id = geraId()),
      (newPet.adotado = adotado),
      (newPet.especie = especie),
      (newPet.dataBirth = dataBirth),
      (newPet.name = name),
      this.repository.createPet(newPet);
    return res.status(201).json(newPet);
  }

  async listPet(req: Request, res: Response) {
    const listaDePets = await this.repository.listPet();
    return res.status(200).json(listaDePets);
  }

  async updatePet(req: Request, res: Response) {
    const { id } = req.params;
    const { success, message } = await this.repository.updatePet(
      Number(id),
      req.body as PetEntity
    );

    if (!success) {
      return res.status(404).json({ message });
    }
    return res.sendStatus(204);
  }

  async deletePet(req: Request, res: Response) {
    const { id } = req.params;

    const { success, message } = await this.repository.deletePet(Number(id));

    if (!success) {
      return res.status(404).json({ message });
    }
    return res.sendStatus(204);
  }
}
