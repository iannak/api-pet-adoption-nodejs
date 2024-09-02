import { Repository } from "typeorm";
import AddressEntity from "../entities/AddressEntity";
import AdopterEntity from "../entities/AdopterEntity";
import InterfaceAdopterRepository from "./interfaces/InterfaceAdopterRepository";


export default class AdopterRepository implements InterfaceAdopterRepository {
  constructor(private repository: Repository<AdopterEntity>) {}

  createAdopter(adopter: AdopterEntity): void | Promise<void> {
    this.repository.save(adopter);
  }
  async listAdopter(): Promise<AdopterEntity[]> {
    return await this.repository.find();
  }
  async updateAdopter(
    id: number,
    newData: AdopterEntity
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const adopterToUpdate = await this.repository.findOne({ where: { id } });

      if (!adopterToUpdate) {
        return { success: false, message: "Adotante não encontrado" };
      }

      Object.assign(adopterToUpdate, newData);

      await this.repository.save(adopterToUpdate);

      return { success: true };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Ocorreu um erro ao tentar atualizar o adotante.",
      };
    }
  }

  async deleteAdopter(
    id: number
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const adopterToRemove = await this.repository.findOne({ where: { id } });

      if (!adopterToRemove) {
        return { success: false, message: "Adotante não encontrado" };
      }

      await this.repository.remove(adopterToRemove);

      return { success: true };
    } catch (error) {
      // Se ocorrer um erro inesperado, você pode retornar uma mensagem genérica ou personalizada.
      return {
        success: false,
        message: "Ocorreu um erro ao tentar excluir o adotante.",
      };
    }
  }

  async updateAddressAdopter(
    idAdotante: number,
    address: AddressEntity
  ): Promise<{ success: boolean; message?: string }> {
    const adopter = await this.repository.findOne({
      where: { id: idAdotante },
    });

    if (!adopter) {
      return { success: false, message: "Adotante não encontrado" };
    }

    const newAddress = new AddressEntity(address.city, address.state, address.street, address.number, address.complement, address.neighborhood, address.zipCode);
    adopter.address = newAddress;
    await this.repository.save(adopter);
    return { success: true };
  }
}
