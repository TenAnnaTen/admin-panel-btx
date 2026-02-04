import { z } from "zod";

export const authSchema = z.object({
    username: z.string().min(4, { message: "Минимум 4 символа" }),
    password: z.string().min(6, { message: "Минимум 6 символов" }),
});
