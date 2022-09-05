import React from "react";
import { useForm, Head } from "@inertiajs/inertia-react";
import { useEffect } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    console.log(errors);

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
        post(route("admin.register"));
    };

    return (
        <>
            <Head title="管理者登録" />
            <form onSubmit={submit}>
                <div>
                    <div>氏名</div>
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={(e) => onHandleChange(e)}
                    />
                    <div>{errors.name}</div>
                </div>
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
                        type="text"
                        name="password"
                        value={data.password}
                        onChange={(e) => onHandleChange(e)}
                    />
                    <div>{errors.password}</div>
                </div>
                <div>
                    <div>パスワード確認</div>
                    <input
                        type="text"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) => onHandleChange(e)}
                    />
                    <div>{errors.password_confirmation}</div>
                </div>
                <input type="submit" />
            </form>
        </>
    );
}
