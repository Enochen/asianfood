import axios from "axios";
import { BaseRecipe } from "./types";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const searchRecipes = (query: string, pantry: string[]) => {
  return client.post<BaseRecipe[]>(`/recipes`, { query, pantry });
};

export const searchRecipe = (id: number) => {
  return client.get<BaseRecipe>(`/recipes/${id}`);
};
