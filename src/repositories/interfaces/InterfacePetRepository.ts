import PetEntity from "../../entities/PetEntity";

export default interface InterfacePetRepository {
  createPet(pet: PetEntity): void | Promise<void>;
  listPet(): Array<PetEntity> | Promise<PetEntity[]>;
  updatePet(
    id: number,
    pet: PetEntity
  ): Promise<{ success: boolean; message?: string }> | void;

  deletePet(id: number): Promise<{ success: boolean; message?: string }> | void;
}
