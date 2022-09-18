import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
};

export default function SubmitButton(props: Props) {
    return (
        <button
            type="submit"
            onClick={props.onClick}
            disabled={props.disabled}
            className={`group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                props.className ? props.className : "w-full"
            }`}
        >
            {props.children}
        </button>
    );
}
