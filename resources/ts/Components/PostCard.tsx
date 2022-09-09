import React from "react";
import * as FaIcons from "react-icons/fa";

type Post = {
    id: number;
    user_id: number;
    name: string;
    content: string;
    created_at: string;
};

type Props = {
    post: Post;
};

export default function PostCard(props: Props) {
    return (
        <div className="flex mb-3 bg-white hover:bg-yellow-50 duration-500 p-3 rounded-lg cursor-pointer">
            <div className="w-1/6 justify-center">
                <div className="">
                    <FaIcons.FaUser
                        className="text-3xl border-2 rounded-full"
                        color="gray"
                    />
                </div>
            </div>
            <div className="w-5/6">
                <div className="flex justify-between mb-2">
                    <div className="font-bold hover:underline">
                        {props.post.name}
                    </div>
                    <div>{props.post.created_at}</div>
                </div>
                <div>{props.post.content}</div>
            </div>
        </div>
    );
}
