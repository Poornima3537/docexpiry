export interface DocumentRequest {
  name: string;
  categoryId: number;
  expiryDate: string;
}

export interface DocumentResponse {
  id: number;
  name: string;
  categoryName: string;
  expiryDate: string;
  status: string;
}