import Authenticated from "@/Layout/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";

export default function Home() {
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        Inertia.post(route("user.logout"));
    };

    const [state, setState] = useState(false);
    console.log(state);

    return (
        <Authenticated>
            <h1>コンテンツです。</h1>
            <div>ユーザー画面：ログイン成功しました</div>
            <form>
                <input type="submit" value="ログアウト" />
            </form>
        </Authenticated>
    );
}
