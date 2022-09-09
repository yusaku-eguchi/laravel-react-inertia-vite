import { createContext, ReactNode, useState } from "react";

type Props = {
    children: ReactNode;
};

type Context = {
    sideBar: boolean;
    showSideBar: () => void;
};

export const SideBarContext = createContext({} as Context);

export function SideBarProvider(props: Props) {
    const [sideBar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sideBar);

    return (
        <SideBarContext.Provider value={{ sideBar, showSideBar }}>
            {props.children}
        </SideBarContext.Provider>
    );
}
