import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userName, email, password } = await req.json();
    console.log("Printing", {
      name: userName,
      email: email,
      password: password,
    });
    return NextResponse.json({
      status: 201,
      message: "User registered successfully",
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "error" });
  }
}
