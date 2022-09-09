import PostCard from "@/Components/PostCard";
import Authenticated from "@/Layout/User/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

type Post = {
    id: number;
    user_id: number;
    name: string;
    content: string;
    created_at: string;
};

type Props = {
    posts: Post[];
};

export default function Home(props: Props) {
    console.log(props.posts);
    return (
        <Authenticated>
            <div className="flex justify-around">
                <div className="w-3/5">
                    <div className="flex justify-between">
                        <div className="text-2xl font-bold">Tweets</div>
                        <button className="bg-green-300 text-zinc-700 rounded px-3 py-2 hover:bg-green-500 duration-200">
                            <Link href="#">ツイートする</Link>
                        </button>
                    </div>
                    <div className="mt-10 border-gray-500 border-4 rounded-lg p-4">
                        {props.posts.map((post) => (
                            <PostCard post={post} key={post.id} />
                        ))}
                    </div>
                </div>
                <div className="bg-red-100 w-4/12"></div>
            </div>
        </Authenticated>
    );
}
