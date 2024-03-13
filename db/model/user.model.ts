import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  roles: [{ type: Schema.Types.ObjectId, ref: "Role" }],
});

const modelName = models?.Users || model("Users", userSchema);
export default modelName;
