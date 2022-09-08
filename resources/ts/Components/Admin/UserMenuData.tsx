import * as FiIcon from "react-icons/fi";

export const UserMenuData = [
    {
        title: "ユーザー設定",
        path: "#",
        icon: <FiIcon.FiUser color="black" className="text-xl" />,
    },
    {
        title: "ログアウト",
        path: route("admin.logout"),
        icon: <FiIcon.FiLogOut color="black" className="text-xl" />,
    },
];
