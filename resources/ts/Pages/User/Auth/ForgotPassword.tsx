import Input from "@/Components/Input";
import Label from "@/Components/Label";
import SubmitButton from "@/Components/SubmitButton";
import Guest from "@/Layout/Guest";
import { Head, useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function ForgotPassword(props) {
    const { data, setData, post } = useForm({ email: "" });

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setData(e.target.name, e.target.value);

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("forgot-password"));
    };
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
                <div className="mt-4">
                    <SubmitButton>送信</SubmitButton>
                </div>
            </form>
        </Guest>
    );
}
