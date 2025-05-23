import { z } from "zod";

export const ZodFormSchema = z.object({
  username: z.string().min(5, "Username is required"),
  email: z.string().email("Invalid email address"),
});

export type ZodFormData = z.infer<typeof ZodFormSchema>;
