import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
    name: { type: String, required: true },
    ingridients: { type: [String], required: true }
});
export default model('Recipe', recipeSchema)