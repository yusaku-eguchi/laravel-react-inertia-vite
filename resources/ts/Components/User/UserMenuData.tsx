import * as FiIcon from "react-icons/fi";

export const UserMenuData = [
    {
        title: "ユーザー設定",
        path: route("user.account.settings"),
        method: "get",
        icon: <FiIcon.FiUser color="black" className="text-xl" />,
    },
    {
        title: "ログアウト",
        path: route("user.logout"),
        method: "post",
        icon: <FiIcon.FiLogOut color="black" className="text-xl" />,
    },
];
