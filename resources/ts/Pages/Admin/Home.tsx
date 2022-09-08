import Authenticated from "@/Layout/Admin/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import React from "react";

export default function Home() {
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        Inertia.post(route("admin.logout"));
    };

    return (
        <Authenticated>
            <div>管理者画面：ログイン成功しました</div>
            <form onSubmit={submit}>
                <input type="submit" value="ログアウト" />
            </form>
        </Authenticated>
    );
}
