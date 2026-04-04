export interface User {
  id: number;
  username: string,
  password: string,
  fullName: string;
  email: string;
  isActive: boolean;
  role: "admin" | "user";
  address: string;
  createdAt: Date;
}