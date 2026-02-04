import z from "zod";
import { authSchema } from "../lib/validation";

export type AuthFormValues = z.infer<typeof authSchema>;

export type ResponseAuth = {
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: 'female' | 'male',
    image: string,
    accessToken: string,
    refreshToken: string
}