"use client";

import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, Link, Listbox, ListboxItem } from "@heroui/react";
import BTXIcon from "../../../public/BTX.svg"
import { usePathname } from "next/navigation";
import { SIDEBAR_MENU } from "../config/contants";

export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <Drawer
            isOpen
            placement="left"
            backdrop="transparent"
            hideCloseButton
            classNames={{
                base: "rounded-none w-72",
            }}
        >
            <DrawerContent className="flex flex-col justify-between h-full p-8">
                <DrawerHeader className="w-full justify-center">
                    <BTXIcon className="w-25" />
                </DrawerHeader>
                <DrawerBody className="p-0 mt-10">
                    <Listbox
                        className="p-0"
                        itemClasses={{
                            base: "rounded-[14px] py-3 px-4 cursor-pointer data-[hover=true]:text-[#006FEE] data-[hover=true]:bg-[#CCE3FD]",
                        }}
                    >
                        {SIDEBAR_MENU.map((item) => {
                            const active = pathname === item.path;

                            return (
                                <ListboxItem
                                    key={item.path}
                                    startContent={<item.icon />}
                                    className={`
                                        ${active
                                            ? "bg-[#CCE3FD] text-[#006FEE]"
                                            : "hover:bg-[#CCE3FD] hover:text-[#006FEE]"
                                        }
                                    `}
                                >
                                    <Link
                                        href={item.path}
                                        className={`
                                            block w-full h-full text-black
                                            ${active
                                                ? "bg-[#CCE3FD] text-[#006FEE]"
                                                : "hover:bg-[#CCE3FD] hover:text-[#006FEE]"
                                            }
                                            `}
                                    >
                                        {item.label}
                                    </Link>
                                </ListboxItem>
                            )
                        })}
                    </Listbox>
                </DrawerBody>
                <DrawerFooter>
                    footer
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}