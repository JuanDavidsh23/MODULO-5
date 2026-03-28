export interface User {
  id: string;
  fullName: string;
  email: string;
  isActive: boolean;
  role: "admin" | "user";
  address: string;
  createdAt: Date;
}