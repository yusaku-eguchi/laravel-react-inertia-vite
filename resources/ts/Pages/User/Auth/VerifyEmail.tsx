import Guest from "@/Layout/Guest";
import { Head, useForm } from "@inertiajs/inertia-react";
import React from "react";

type Props = {
    status?: string;
};

export default function VerifyEmail(props: Props) {
    const { post, processing } = useForm();

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("verification.send"));
    };

    return (
        <Guest title="会員登録">
            <Head title="会員登録"></Head>
            {props.status ? (
                <div className="text-green-300">{props.status}</div>
            ) : (
                <div>ステータスはありません</div>
            )}
            <div>
                仮登録メールをお送りいたしました。
                メールに記載されているリンクから、メールアドレスの確認を行ってください
            </div>
            <form onSubmit={submit}>
                <button>メールを再送する</button>
            </form>
        </Guest>
    );
}
