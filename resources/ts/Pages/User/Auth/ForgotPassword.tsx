import FlashMessage from "@/Components/FlashMessage";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import SubmitButton from "@/Components/SubmitButton";
import Guest from "@/Layout/Guest";
import { Head, useForm, usePage } from "@inertiajs/inertia-react";
import React from "react";

export default function ForgotPassword() {
    const { data, setData, post, processing } = useForm({ email: "" });
    const { flash } = usePage().props;

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
                {flash.message && (
                    <FlashMessage
                        message={flash.message}
                        type="success"
                        className="mt-4"
                    />
                )}
                <div className="mt-4">
                    <SubmitButton disabled={processing}>送信</SubmitButton>
                </div>
            </form>
        </Guest>
    );
}
