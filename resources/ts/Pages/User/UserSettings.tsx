import Input from "@/Components/Input";
import SubmitButton from "@/Components/SubmitButton";
import UserSettingsCard from "@/Components/User/UserSettingsCard";
import Authenticated from "@/Layout/User/Authenticated";
import { Head, useForm, usePage } from "@inertiajs/inertia-react";
import axios from "axios";
import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";

export default function UserSettings() {
    const { auth, flash } = usePage().props;
    console.log(usePage().props);
    const [qrCode, setQRCode] = useState("");
    const { data, setData, post, processing, errors, reset } = useForm({
        secret: "",
    });

    const getQRCode = () => {
        axios.get("/api/show-qrcode").then((resp) => {
            setQRCode(resp.data.qrCodeImg);
        });
    };

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(event.target.name, event.target.value);
    };

    const sendCode = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault;
        post(route("mfa-enable"));
    };

    return (
        <Authenticated>
            <Head title="ユーザー設定" />
            <div className="w-3/5 h-auto">
                <div className="text-2xl font-bold">ユーザー設定</div>
                {flash.message && <div>{flash.message}</div>}
                {/* QRコード取得後 */}
                <UserSettingsCard title="プロフィール">
                    <div>
                        <div>{auth.user.name}</div>
                        <div>{auth.user.email}</div>
                    </div>
                </UserSettingsCard>
                <UserSettingsCard title="二要素認証">
                    {qrCode !== "" && (
                        <form onSubmit={sendCode}>
                            <img src={`data:image/png;base64, ${qrCode}`} />
                            <Input
                                type="number"
                                value={data.secret}
                                name="secret"
                                handleChange={onHandleChange}
                                className="mt-4"
                            ></Input>
                            <SubmitButton className="mt-4">送信</SubmitButton>
                        </form>
                    )}
                    {qrCode === "" && !auth.user.mfa_flag && (
                        <SubmitButton onClick={getQRCode} className="w-28">
                            有効化
                        </SubmitButton>
                    )}
                    {auth.user.mfa_flag && (
                        <div className="flex items-center">
                            <BsIcons.BsCheckCircle
                                color="green"
                                className="text-xl"
                            />
                            <span className="ml-2">有効済み</span>
                        </div>
                    )}
                </UserSettingsCard>
            </div>
        </Authenticated>
    );
}
