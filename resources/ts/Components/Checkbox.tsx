import React from "react";

type Props = {
    name: string;
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Checkbox(props: Props) {
    return (
        <input
            type="checkbox"
            name={props.name}
            value={props.value}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={props.handleChange}
        />
    );
}
