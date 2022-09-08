import React, { useEffect } from "react";
// import Button from "@/Components/Button";
import Guest from "@/Layout/Guest";
import Input from "@/Components/Input";
// import InputError from "@/Components/InputError";
import Label from "@/Components/Label";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import SubmitButton from "@/Components/SubmitButton";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <Guest title="会員登録">
            <Head title="会員登録" />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="name" value="名前" />

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    {/* <InputError message={errors.name} className="mt-2" /> */}
                </div>

                <div className="mt-4">
                    <Label forInput="email" value="メールアドレス" />

                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />

                    {/* <InputError message={errors.email} className="mt-2" /> */}
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="パスワード" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    {/* <InputError message={errors.password} className="mt-2" /> */}
                </div>

                <div className="mt-4">
                    <Label
                        forInput="password_confirmation"
                        value="パスワード（確認）"
                    />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    {/* <InputError message={errors.password_confirmation} className="mt-2" /> */}
                </div>

                <div className="flex items-center justify-start mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                    >
                        すでにアカウントをお持ちですか？
                    </Link>
                </div>
                <div className="mt-4">
                    <SubmitButton>登録</SubmitButton>
                </div>
            </form>
        </Guest>
    );
}
