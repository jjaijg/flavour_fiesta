import { Router } from "express";
import {
  createRecipe,
  deleteRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
} from "../controllers/recipes";

const router = Router();

router.get("/", getAllRecipes);

router.get("/:id", getRecipeById);

router.post("/", createRecipe);

router.patch("/:id", updateRecipe);

router.delete("/:id", deleteRecipe);

export default router;
