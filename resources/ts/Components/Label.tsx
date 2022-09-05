import React from "react";

type Props = {
    forInput: string;
    value: string;
};

export default function Label(props: Props) {
    return (
        <label
            htmlFor={props.forInput}
            className="block font-medium text-sm text-gray-700"
        >
            {props.value}
        </label>
    );
}
