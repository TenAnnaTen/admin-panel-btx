import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";

const instance: AxiosInstance = axios.create({
    baseURL: "https://dummyjson.com/"
});

instance.interceptors.request.use((config) => {
    const token = Cookies.get("accessToken");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export const httpClient = <T, D = undefined>(config: AxiosRequestConfig<D>): Promise<AxiosResponse<T, D>> =>
    instance(config);