import { FC, SVGProps } from "react";
import PostsIcon from "../../../public/posts.svg"
import UsersIcon from "../../../public/users.svg"
import AdminIcon from "../../../public/administration.svg"

export type MenuItem = {
    label: string;
    path: string;
    icon: FC<SVGProps<SVGSVGElement>>
};

export const SIDEBAR_MENU: MenuItem[] = [
    {
        label: "Публикации",
        path: "/",
        icon: PostsIcon,
    },
    {
        label: "Администраторы",
        path: "/admins",
        icon: AdminIcon,
    },
    {
        label: "Пользователи",
        path: "/users",
        icon: UsersIcon
    },
];