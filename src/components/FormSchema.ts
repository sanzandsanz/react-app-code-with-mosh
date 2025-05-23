import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  age: z
    .number({ invalid_type_error: "Age is required" })
    .min(18, "You must be at least 18"),
});

export type FormData = z.infer<typeof FormSchema>;
