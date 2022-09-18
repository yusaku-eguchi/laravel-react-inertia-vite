import * as FiIcon from "react-icons/fi";

export const UserMenuData = [
    {
        title: "ユーザー設定",
        method: "get",
        path: route("user.settings"),
        icon: <FiIcon.FiUser color="black" className="text-xl" />,
    },
    {
        title: "ログアウト",
        method: "post",
        path: route("user.logout"),
        icon: <FiIcon.FiLogOut color="black" className="text-xl" />,
    },
];
