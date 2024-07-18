interface Category {
  _id: string;
  imageUrl: string;
  name: string;
}

export interface RecipeCategoriesResponse {
  message: string;
  number: Number;
  categories: Category[];
}

export interface ErrorResponse {
  message: string;
  error: string;
}
