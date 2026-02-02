import { Button, Form, Input } from "@heroui/react"
import BTX from "../../../../public/BTX.svg"
import Image from "next/image"

export const AuthForm = () => {
    return (
        <Form className="gap-10 bg-white p-15 max-w-[565px] items-center rounded-4xl shadow mx-auto">
            <Image
                src={BTX}
                alt="Logo"
                width={100}
            />
            <div className="text-center">
                <p className="text-4xl leading-10 font-semibold mb-5">Панель администратора</p>
                <p className="text-lg leading-7 font-normal text-[#3F3F46]">Войдите в систему для продолжения</p>
            </div>
            <div className="w-full flex flex-col gap-7">
                <Input
                    isRequired
                    label="Имя пользователя"
                    name="name"
                    placeholder="admin@example.com"
                    type="email"
                    labelPlacement="outside"
                    classNames={{
                        label: "text-[#52525B]! text-xs after:content-['']",
                        input: "placeholder:text-[#71717A]",
                        inputWrapper: "shadow-sm bg-transparent border-2 border-[#E4E4E7]",
                    }}
                />
                <Input
                    isRequired
                    label="Пароль"
                    name="password"
                    placeholder="Введите пароль"
                    type="password"
                    labelPlacement="outside"
                    classNames={{
                        label: "text-[#52525B]! text-xs after:content-['']",
                        input: "placeholder:text-[#71717A]",
                        inputWrapper: "shadow-sm bg-transparent border-2 border-[#E4E4E7]",
                    }}
                />
            </div>
            <Button color="primary" type="submit" className="w-full">
                Войти
            </Button>
        </Form>
    )
}