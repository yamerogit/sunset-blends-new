import express from "express";
import { createCoffee, deleteCoffee, getAllCoffees, getCoffeeById, updateCoffee } from "../controllers/coffeesController.js";

const router = express.Router();

router.get("/",getAllCoffees);
router.get("/:id",getCoffeeById);
router.post("/",createCoffee);
router.put("/:id",updateCoffee);
router.delete("/:id",deleteCoffee);

export default router;