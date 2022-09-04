import { Inertia } from "@inertiajs/inertia";
import React from "react";

export default function Home() {
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        Inertia.post(route("admin.logout"));
    };

    return (
        <>
            <div>ログイン成功しました</div>
            <form onSubmit={submit}>
                <input type="submit" value="ログアウト" />
            </form>
        </>
    );
}
