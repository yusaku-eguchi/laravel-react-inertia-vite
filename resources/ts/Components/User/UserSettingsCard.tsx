import React, { ReactNode } from "react";

type Props = {
    title: string;
    description?: string;
    children: ReactNode;
    className?: string;
};

export default function UserSettingsCard(props: Props) {
    return (
        <div
            className={`w-full flex justify-between border-b-2 p-4 border-gray-400 ${props.className}`}
        >
            <div className="w-1/4">
                <div className="font-bold text-xl">{props.title}</div>
                {props.description && <div>{props.description}</div>}
            </div>
            <div className="w-3/4">{props.children}</div>
        </div>
    );
}
