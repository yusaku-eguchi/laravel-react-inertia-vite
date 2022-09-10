import Input from "@/Components/Input";
import Label from "@/Components/Label";
import SubmitButton from "@/Components/SubmitButton";
import Guest from "@/Layout/Guest";
import { Head, useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";

type Props = {
    email: string;
    token: string;
};

export default function ResetPassword(props: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: props.email,
        password: "",
        password_confirmation: "",
        token: props.token,
    });

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setData(e.target.name, e.target.value);

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("password.update"));
    };

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);
    return (
        <Guest title="パスワード再設定">
            <Head title="パスワード再設定" />
            <form onSubmit={submit}>
                <Label forInput="email" value="メールアドレス" />
                <Input
                    type="text"
                    name="email"
                    className="mt-4 block w-full"
                    value={data.email}
                    autoComplete="username"
                    isFocused={true}
                    handleChange={onHandleChange}
                    required
                />
                <Label forInput="password" value="新しいパスワード" />
                <Input
                    type="password"
                    name="password"
                    className="mt-4 block w-full"
                    value={data.password}
                    autoComplete="username"
                    isFocused={true}
                    handleChange={onHandleChange}
                    required
                />
                <Label forInput="password" value="新しいパスワード（確認）" />
                <Input
                    type="password"
                    name="password_confirmation"
                    className="mt-4 block w-full"
                    value={data.password_confirmation}
                    autoComplete="username"
                    isFocused={true}
                    handleChange={onHandleChange}
                    required
                />
                <div className="mt-4">
                    <SubmitButton>パスワード再設定</SubmitButton>
                </div>
            </form>
        </Guest>
    );
}
