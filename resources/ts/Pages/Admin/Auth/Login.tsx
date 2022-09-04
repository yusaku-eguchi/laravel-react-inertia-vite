import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";

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

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("admin.login"));
    };
    return (
        <form onSubmit={submit}>
            <div>
                <div>メールアドレス</div>
                <input
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={(e) => onHandleChange(e)}
                />
                <div>{errors.email}</div>
            </div>
            <div>
                <div>パスワード</div>
                <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={(e) => onHandleChange(e)}
                />
                <div>{errors.password}</div>
            </div>
            <div>
                <input
                    type="checkbox"
                    name="remember"
                    value={data.remember}
                    onChange={(e) => onHandleChange(e)}
                />
            </div>
            <input type="submit" />
        </form>
    );
}
