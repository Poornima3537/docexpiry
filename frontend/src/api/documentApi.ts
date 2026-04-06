import api from "./axios";
import type { DocumentRequest} from "../types/document";

export const getDocuments = async (userId: number) => {
  const res = await api.get(`/documents/user/${userId}`);
  return res.data;
};

export const addDocument = async (userId: number, data: DocumentRequest) => {
  const res = await api.post(`/documents/${userId}`, data);
  return res.data;
};

export const deleteDocument = async (id: number) => {
  const res = await api.delete(`/documents/${id}`);
  return res.data;
};

export const updateDocument = async (id: number, data: any) => {
  const res = await api.put(`/documents/${id}`, data);
  return res.data;
};

export const getDocumentById = async (id: number) => {
  const res = await api.get(`/documents/${id}`);
  return res.data;
};