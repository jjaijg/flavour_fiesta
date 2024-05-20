import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { authConfig } from "../login/auth.config";

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await authConfig.adapter.createUser!({
      id: "",
      emailVerified: null,
      username,
      email,
      password: hashPassword,
      roles: [],
    });

    return NextResponse.json({
      status: 201,
      data: user,
      message: "User registered successfully",
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "error" });
  }
}
