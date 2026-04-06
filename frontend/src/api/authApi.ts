import api from "./axios";
import type { AuthRequest, AuthResponse } from "../types/auth";

export const loginUser = async (data: AuthRequest): Promise<AuthResponse> => {
  const res = await api.post("/auth/login", data);
  return res.data;
};

export const registerUser = async (data: AuthRequest): Promise<AuthResponse> => {
  const res = await api.post("/auth/register", data);
  return res.data;
};