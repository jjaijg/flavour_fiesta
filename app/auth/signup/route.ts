import { NextResponse } from "next/server";
import { connectToDb } from "@/db";
import User from "@/db/model/user.model";

connectToDb();
export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();

    const user = new User({ username, email, password });
    await user.save();

    return NextResponse.json({
      status: 201,
      data: user,
      message: "User registered successfully",
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "error" });
  }
}
