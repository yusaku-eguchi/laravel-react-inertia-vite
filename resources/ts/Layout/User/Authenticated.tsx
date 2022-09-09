import SideBar from "@/Components/User/SideBar";
import { SideBarProvider } from "@/Provider/SideBarProvider";
import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function Authenticated(props: Props) {
    return (
        <SideBarProvider>
            <SideBar>{props.children}</SideBar>
        </SideBarProvider>
    );
}
