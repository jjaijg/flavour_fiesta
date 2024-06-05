import { Schema, model, models, HydratedDocument } from "mongoose";

export type TCategory = {
  _id: string;
  name: string;
  imageUrl: string;
};
export type TCategoryModel = HydratedDocument<TCategory>;

const recipeCategorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const recipeCategories =
  models.Recipe_Categories ||
  model<TCategory>("Recipe_Categories", recipeCategorySchema);

export default recipeCategories;
