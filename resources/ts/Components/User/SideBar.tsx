import { Link } from "@inertiajs/inertia-react";
import React, { ReactNode, useContext, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as VscIcon from "react-icons/vsc";
import { SidebarData } from "@/Components/SideBarData";
import { IconContext } from "react-icons";
import { UserMenuData } from "@/Components/User/UserMenuData";
import { SideBarContext } from "@/Provider/SideBarProvider";

type Props = {
    children: ReactNode;
};

export default function SideBar(props: Props) {
    const { sideBar, showSideBar } = useContext(SideBarContext);
    const [userMenu, setUserMenu] = useState(false);

    const showUserMenu = () => setUserMenu(!userMenu);

    return (
        <IconContext.Provider value={{ color: "#fff" }}>
            <div className="bg-green-600 h-20 flex justify-between items-center">
                <button className="ml-8 text-4xl bg-none">
                    <FaIcons.FaBars onClick={showSideBar} />
                </button>
                <div className="flex items-center mr-10">
                    <button
                        className="border-2 rounded-full p-3"
                        onClick={showUserMenu}
                    >
                        <FaIcons.FaUser className="text-xl" />
                    </button>
                    {userMenu ? (
                        <VscIcon.VscTriangleUp className="text-2xl ml-1" />
                    ) : (
                        <VscIcon.VscTriangleDown className="text-2xl ml-1" />
                    )}
                </div>
                <div
                    className={`py-3 fixed top-24 right-10 w-64 border-gray-500 border-2 rounded-xl ${
                        userMenu || "hidden"
                    }`}
                >
                    <ul>
                        {UserMenuData.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.path}
                                    method={item.method}
                                    className="flex justify-start items-center py-1 pl-4 hover:underline"
                                >
                                    {item.icon}
                                    <span className="m-2">{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <nav
                className={`bg-green-600 w-64 h-screen flex justify-center fixed top-0 -left-full duration-100 ${
                    sideBar && "left-0"
                }`}
            >
                <ul className="w-full" onClick={showSideBar}>
                    <li className="bg-green-600 w-full h-20 flex justify-start items-center">
                        <Link href="#" className="ml-8 text-4xl bg-none">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="flex justify-start items-center py-2 pl-4"
                            >
                                <Link
                                    href={item.path}
                                    className="text-neutral-100 text-lg w-11/12 h-full flex items-center px-4 rounded hover:bg-red-500 duration-300"
                                >
                                    {item.icon}
                                    <span className="m-4">{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div
                // className={`duration-100 mt-6 w-9/12 mx-auto bg-blue-100  ${
                //     sideBar && "w-[calc(75%-16rem)] pl-64"
                // } `}
                className={`duration-100 w-11/12 mx-auto mt-10 ${
                    sideBar && "pl-64"
                }`}
            >
                {props.children}
            </div>
        </IconContext.Provider>
    );
}
