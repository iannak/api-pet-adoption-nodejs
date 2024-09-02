import { Request, Response } from "express";
import AddressEntity from "../entities/AddressEntity";
import AdopterEntity from "../entities/AdopterEntity";
import AdopterRepository from "../repositories/AdopterRepository";


export default class AdopterController {
  constructor(private repository: AdopterRepository) {}
  async createAdopter(req: Request, res: Response) {
    const { name, phone, address, photo, password } = <AdopterEntity>req.body;

    const newAdopter = new AdopterEntity(
      name,
      password,
      phone,
      photo,
      address
    );

    await this.repository.createAdopter(newAdopter);
    return res.status(201).json(newAdopter);
  }
  async updateAdopter(req: Request, res: Response) {
    const { id } = req.params;
    const { success, message } = await this.repository.updateAdopter(
      Number(id),
      req.body as AdopterEntity
    );

    if (!success) {
      return res.status(404).json({ message });
    }

    return res.sendStatus(204);
  }

  async listAdopter(req: Request, res: Response) {
    const listToAdopter = await this.repository.listAdopter();
    return res.json(listToAdopter);
  }

  async deletAdopter(req: Request, res: Response) {
    const { id } = req.params;

    const { success, message } = await this.repository.deleteAdopter(
      Number(id)
    );

    if (!success) {
      return res.status(404).json({ message });
    }
    return res.sendStatus(204);
  }

  async updateAddressAdopter(req: Request, res: Response) {
    const { id } = req.params;

    const { success, message } = await this.repository.updateAddressAdopter(
      Number(id),
      req.body as AddressEntity
    );

    if (!success) {
      return res.status(404).json({ message });
    }
    return res.sendStatus(204);
  }
}
