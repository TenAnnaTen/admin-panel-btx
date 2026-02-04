import { httpClient } from "@/shared/lib/http-client";
import { AuthFormValues, ResponseAuth } from "./types";
import Cookies from "js-cookie";

export const postAuth = async (data: AuthFormValues): Promise<ResponseAuth> => {
    try {
        const response = await httpClient<ResponseAuth, AuthFormValues>({
            method: 'POST',
            url: 'auth/login',
            data,
        });

        Cookies.set("accessToken", response.data.accessToken, {
            expires: 1 / 24,
            sameSite: "strict"
        });

        return response.data;
    } catch (error) {
        console.error("Ошибка при авторизации:", error);
        throw error;
    }
};
