import { Head, Link, useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import SubmitButton from "@/Components/SubmitButton";
import Guest from "@/Layout/Guest";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Checkbox from "@/Components/Checkbox";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
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
        post(route("login"));
    };
    return (
        <Guest title="ユーザーログイン">
            <Head title="ユーザーログイン" />
            <form onSubmit={submit}>
                <div className="mt-4">
                    <Label forInput="name" value="メールアドレス" />
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
                    <div>{errors.email}</div>
                </div>
                <div className="mt-4">
                    <Label forInput="name" value="パスワード" />
                    <Input
                        type="password"
                        name="password"
                        className="mt-3 block w-full"
                        value={data.password}
                        autoComplete="current-password"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                    <div>{errors.password}</div>
                </div>
                <div className="mt-4">
                    <Checkbox
                        name="remember"
                        value={data.remember}
                        handleChange={onHandleChange}
                    />
                    <span className="ml-2 text-gray-700">
                        ログインを記憶する
                    </span>
                </div>
                <div className="mt-4">
                    <Link
                        href={route("register")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 block mt-2"
                    >
                        アカウントを作成する
                    </Link>
                    <Link
                        href={route("forgot-password")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 block mt-2"
                    >
                        パスワードを忘れた
                    </Link>
                </div>
                <div className="mt-4">
                    <SubmitButton>ログイン</SubmitButton>
                </div>
            </form>
        </Guest>
    );
}
