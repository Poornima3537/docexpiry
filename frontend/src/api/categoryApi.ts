import api from "./axios";
import type { Category } from "../types/category";

export const getCategories = async (): Promise<Category[]> => {
  const res = await api.get("/categories");
  return res.data;
};

export const addCategory = async (data: Category) => {
  const res = await api.post("/categories", data);
  return res.data;
};