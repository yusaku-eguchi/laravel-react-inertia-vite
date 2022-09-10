import React from "react";

type Props = {
    message: string;
    type: "success" | "error";
    className?: string;
};

export default function FlashMessage(props: Props) {
    let color = "";

    if (props.type === "success") {
        color = "border-lime-500 bg-green-100 text-green-700";
    } else if (props.type === "error") {
        color = "border-red-500 bg-red-100 text-red-700";
    }

    return (
        <div
            className={
                `border-2 rounded-xl p-3 ` + color + " " + props.className
            }
        >
            {props.message}
        </div>
    );
}
