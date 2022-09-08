import React, { useEffect, useRef } from "react";

type Props = {
    type: string;
    name: string;
    value: string;
    className?: string;
    autoComplete: string;
    required?: boolean;
    isFocused: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: Props) {
    const input = useRef();

    useEffect(() => {
        if (props.isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={props.type}
                name={props.name}
                value={props.value}
                className={
                    "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm " +
                    props.className
                }
                ref={input}
                autoComplete={props.autoComplete}
                required={props.required}
                onChange={(e) => props.handleChange(e)}
            />
        </div>
    );
}
