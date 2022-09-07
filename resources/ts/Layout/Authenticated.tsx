import { Link } from "@inertiajs/inertia-react";
import React, { ReactNode, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../Components/SideBarData";
import { IconContext } from "react-icons";

type Props = {
    children: ReactNode;
};

export default function Authenticated(props: Props) {
    const [sideBar, setSideBar] = useState(false);

    return (
        <IconContext.Provider value={{ color: "#fff" }}>
            <div className="bg-indigo-700 h-20 flex justify-start items-center">
                <button className="ml-8 text-4xl bg-none">
                    <FaIcons.FaBars
                        onClick={() => setSideBar((prevState) => !prevState)}
                    />
                </button>
            </div>
            <nav
                className={`bg-indigo-700 w-64 h-screen flex justify-center fixed top-0 -left-full duration-100 ${
                    sideBar && "left-0"
                }`}
            >
                <ul
                    className="w-full"
                    onClick={() => setSideBar((prevState) => !prevState)}
                >
                    <li className="bg-indigo-700 w-full h-20 flex justify-start items-center">
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
                className={`duration-100 fixed left-0 mt-6 ml-6 ${
                    sideBar && "left-64"
                } `}
            >
                {props.children}
            </div>
        </IconContext.Provider>
    );
}
