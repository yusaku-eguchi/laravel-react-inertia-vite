import Authenticated from "@/Layout/User/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import React from "react";

export default function Home() {
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        Inertia.post(route("user.logout"));
    };

    return (
        <Authenticated>
            <h1>コンテンツです。</h1>
            <div>ユーザー画面：ログイン成功しました</div>
        </Authenticated>
    );
}
