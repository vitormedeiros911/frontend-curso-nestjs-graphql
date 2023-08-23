import { z } from "zod";

export const registerSchema = z.object({
  nome: z.string().min(3, "Name is required"),
  email: z.string().email().min(1, "Email is required"),
  senha: z.string().min(6, "Password is required"),
});

export type RegisterInputProps = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email().min(1, "Email is required"),
  senha: z.string().min(6, "Password is required"),
});

export type LoginInputProps = z.infer<typeof loginSchema>;
