import axios from "axios";
import { BaseRecipe } from "./types";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const searchRecipes = (
  query: string,
  pantry: string[]
): Promise<BaseRecipe[]> => {
  return client.post(`/recipes`, { query, pantry });
};
