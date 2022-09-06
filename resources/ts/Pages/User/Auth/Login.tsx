import { Head, useForm } from "@inertiajs/inertia-react";
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
                <div>
                    <Label forInput="name" value="メールアドレス" />
                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                    <div>{errors.email}</div>
                </div>
                <div>
                    <Label forInput="name" value="パスワード" />
                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        autoComplete="current-password"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                    <div>{errors.password}</div>
                </div>
                <div>
                    <Checkbox
                        name="remember"
                        value={data.remember}
                        handleChange={onHandleChange}
                    />
                    ログインを記憶する
                </div>
                <SubmitButton>ログイン</SubmitButton>
            </form>
        </Guest>
    );
}
