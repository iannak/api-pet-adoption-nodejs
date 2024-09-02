import AddressEntity from "../../entities/AddressEntity";
import AdopterEntity from "../../entities/AdopterEntity";

export default interface InterfaceAdopterRepository {
  createAdopter(adopter: AdopterEntity): void | Promise<void>;

  listAdopter(): AdopterEntity[] | Promise<AdopterEntity[]>;

  updateAdopter(
    id: number,
    adopter: AdopterEntity
  ): Promise<{ success: boolean; message?: string }> | void;

  deleteAdopter(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void;

  updateAddressAdopter(
    idAdotante: number,
    address: AddressEntity
  ): Promise<{ success: boolean; message?: string }> | void;
}
