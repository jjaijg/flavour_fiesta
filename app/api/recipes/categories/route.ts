import dbConnect from "@/database/db";
import recipeCategories from "@/database/model/recipeCategories.model";
import { NextResponse, NextRequest } from "next/server";

export async function GET(): Promise<NextResponse> {
  await dbConnect();

  try {
    const categories = await recipeCategories.find({});
    return NextResponse.json({
      message: "Fetched recipe categories successfully",
      number: categories.length,
      categories,
    });
  } catch (error) {
    let msg = (error as Error).message;
    return NextResponse.json(
      {
        message: "Failed to fetch categories",
        error: msg,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { name, imageUrl } = await request.json();
  await dbConnect();

  try {
    await recipeCategories.create({ name, imageUrl });
    return NextResponse.json(
      {
        message: `${name} recipe category created`,
      },
      { status: 201 }
    );
  } catch (error) {
    let msg = (error as Error).message;
    return NextResponse.json(
      {
        message: "Failed to create recipe category",
        error: msg,
      },
      { status: 500 }
    );
  }
}
