import { Request, Response } from "express";
import Recipe from "../model/recipe";

export const createRecipe = async (req: Request, res: Response) => {
  const recipe = new Recipe({
    name: req.body.name,
    ingridients: req.body.ingredients,
  });
  try {
    const r1 = await recipe.save();
    res.json({ message: `Sucessfully added ${r1.name}` });
  } catch (err) {
    res.send("Error" + err);
  }
};

export const getAllRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.send("Error" + err);
  }
};

export const getRecipeById = async (req: Request, res: Response) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
  } catch (err) {
    res.send("Error" + err);
  }
};

export const updateRecipe = async (req: Request, res: Response) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe)
      return res
        .status(404)
        .json({ message: `Recipe with id : ${req.params.id} not found` });

    recipe.name = req.body.name;
    recipe.ingridients = req.body.ingredients;
    const r1 = await recipe.save();
    res.json({ message: `Sucessfully Updated for ${r1.name}` });
  } catch (err) {
    res.send("Error" + err);
  }
};

export const deleteRecipe = async (req: Request, res: Response) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe)
      return res
        .status(404)
        .json({ message: `Recipe with id : ${req.params.id} not found` });

    await recipe.deleteOne();
    res.json({ message: `Sucessfully deleted recipe` });
  } catch (err) {
    res.send("Error" + err);
  }
};
