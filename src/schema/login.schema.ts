import { z } from 'zod';

export const SignInSchema = z.object({
  username: z.string().min(3).max(20),
  password: z
    .string()
    .min(3)
    .max(20)
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;

