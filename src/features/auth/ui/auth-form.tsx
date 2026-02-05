"use client";

import { Button, Input } from "@heroui/react";
import BTXIcon from "../../../../public/BTX.svg";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "../lib/validation";
import { AuthFormValues } from "../model/types";
import { postAuth } from "../model/post-auth";
import { useRouter } from "next/navigation";

export const AuthForm = () => {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<AuthFormValues>({
        resolver: zodResolver(authSchema),
        defaultValues: {
            username: 'emilys',
            password: 'emilyspass'
        },
        mode: "onChange",
    });
    const router = useRouter();

    const onSubmit = async (data: AuthFormValues) => {
        try {
            await postAuth(data);
            router.push('/')
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="gap-10 bg-white p-15 max-w-[565px] items-center rounded-4xl shadow mx-auto flex flex-col"
        >
            <BTXIcon />

            <div className="text-center">
                <p className="text-4xl leading-10 font-semibold mb-5">Панель администратора</p>
                <p className="text-lg leading-7 font-normal text-[#3F3F46]">
                    Войдите в систему для продолжения
                </p>
            </div>

            <div className="w-full flex flex-col gap-7">
                <Controller
                    name="username"
                    control={control}
                    render={({ field: { onChange, value, name }, fieldState: { error } }) => (
                        // здесь по макету должен быть email, но API принимает username, а не почту
                        <Input
                            name={name}
                            value={value ?? ""}
                            onValueChange={(val) => onChange(val)}
                            isRequired
                            label="Имя пользователя"
                            placeholder="admin@example.com"
                            labelPlacement="outside"
                            isInvalid={!!error}
                            errorMessage={error?.message}
                            classNames={{
                                label: "text-[#52525B] text-xs after:content-['']",
                                input: "placeholder:text-[#71717A]",
                                inputWrapper: "shadow-sm bg-transparent border-2 border-[#E4E4E7]",
                            }}
                        />
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    render={({ field: { onChange, value, name }, fieldState: { error } }) => (
                        <Input
                            name={name}
                            value={value ?? ""}
                            onValueChange={(val) => onChange(val)}
                            isRequired
                            label="Пароль"
                            placeholder="Введите пароль"
                            type="password"
                            labelPlacement="outside"
                            isInvalid={!!error}
                            errorMessage={error?.message}
                            classNames={{
                                label: "text-[#52525B] text-xs after:content-['']",
                                input: "placeholder:text-[#71717A]",
                                inputWrapper: "shadow-sm bg-transparent border-2 border-[#E4E4E7]",
                            }}
                        />
                    )}
                />
            </div>

            <Button
                color="primary"
                type="submit"
                className="w-full"
                isLoading={isSubmitting}
            >
                Войти
            </Button>
        </form>
    );
};