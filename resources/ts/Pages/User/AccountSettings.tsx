import Label from "@/Components/Label";
import Authenticated from "@/Layout/User/Authenticated";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";

type User = {
    id: number;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
};

type Props = {
    user: User;
};

export default function AccountSettings(props: Props) {
    const { data, setData, post } = useForm({ avatar: "" });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("user.account.settings"));
    };

    const setAvatar = (e: React.ChangeEvent<HTMLInputElement>) =>
        setData("avatar", e.target.files[0]);
    return (
        <Authenticated>
            <div>{props.user.name}</div>
            <div>{props.user.email}</div>
            <form onSubmit={submit}>
                <Label forInput="avatar" value="アバター画像" />
                <input type="file" onChange={setAvatar} />
                <input type="submit" value="保存" />
            </form>
        </Authenticated>
    );
}
