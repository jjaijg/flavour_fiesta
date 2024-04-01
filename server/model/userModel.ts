import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { CallbackError } from "mongoose";

const { Schema, model } = mongoose;
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "is invalid"], // Simple regex for validation
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
  },
  { timestamps: true }
);

// Hash the password before saving the user document
userSchema.pre("save", async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as CallbackError);
  }
});

// Helper method to check the entered password against the hashed one
userSchema.methods.isValidPassword = async function (
  password: string | Buffer
) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

// Compile model from schema
const User = model("User", userSchema);

export default User;
