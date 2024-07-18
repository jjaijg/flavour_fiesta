import dbConnect from '@/database/db';
import recipeCategories from '@/database/model/recipeCategories.model';
import { NextResponse, NextRequest } from 'next/server';
import type {
  RecipeCategoriesResponse,
  ErrorResponse,
} from '../../../types/recipe-categories.types';

export async function GET(): Promise<NextResponse> {
  await dbConnect();

  try {
    const categories = await recipeCategories.find({});
    const response: RecipeCategoriesResponse = {
      message: 'Fetched recipe categories successfully',
      number: categories.length,
      categories,
    };
    return NextResponse.json(response);
  } catch (error) {
    let msg = (error as Error).message;
    const errorResponse: ErrorResponse = {
      message: 'Failed to fetch categories',
      error: msg,
    };
    return NextResponse.json(errorResponse, { status: 500 });
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
        message: 'Failed to create recipe category',
        error: msg,
      },
      { status: 500 }
    );
  }
}
export async function PUT(request: NextRequest): Promise<NextResponse> {
  const { id, name, imageUrl } = await request.json();
  await dbConnect();

  try {
    const updatedCategory = await recipeCategories.findByIdAndUpdate(
      id,
      { name, imageUrl },
      { new: true } // This option returns the updated document
    );

    if (!updatedCategory) {
      return NextResponse.json(
        {
          message: 'Recipe category not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: `${name} recipe category updated`,
        category: updatedCategory,
      },
      { status: 200 }
    );
  } catch (error) {
    let msg = (error as Error).message;
    return NextResponse.json(
      {
        message: 'Failed to update recipe category',
        error: msg,
      },
      { status: 500 }
    );
  }
}
