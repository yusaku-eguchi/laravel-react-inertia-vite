import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function SubmitButton(props: Props) {
    return (
        <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
            {props.children}
        </button>
    );
}
