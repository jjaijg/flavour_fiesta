import { Schema, model, models } from "mongoose";

const roleSchema = new Schema({
  name: { type: String, required: true },
});
export default models.roles || model("Role", roleSchema);
