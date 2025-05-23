import { z } from "zod";

export const ZodFormSchema = z.object({
    description: z.string().min(5, "Description is required"),
    amount: z.coerce.number().min(1, "Amount is required"),
    category: z
      .string()
      .min(1, "Category is required")
      .refine((val) => val !== "All", {
        message: "Please select a valid category",
      }),
  });

  export type ZodFormData = z.infer<typeof ZodFormSchema>;