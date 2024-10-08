import express from "express";
import { AppDataSource } from "../config/dataSource";
import PetController from "../controller/PetController";
import PetRepository from "../repositories/PetRepository";
const router = express.Router();

const petRepository = new PetRepository(
  AppDataSource.getRepository("PetEntity")
);
const petController = new PetController(petRepository);

router.post("/", (req, res) => petController.createPet(req, res));
router.get("/", (req, res) => petController.listPet(req, res));
router.put("/:id", (req, res) => petController.updatePet(req, res));
router.delete("/:id", (req, res) => petController.deletePet(req, res));

export default router;
