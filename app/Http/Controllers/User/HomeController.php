<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * display the home screen
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $posts = DB::table('posts')
            ->join('users', 'posts.user_id', '=', 'users.id')
            ->select('posts.user_id', 'posts.id', 'users.name', 'posts.content', 'posts.created_at')
            ->orderBy('created_at', 'asc')
            ->get();

        return Inertia::render('User/Home', [
            'posts' => $posts
        ]);
    }
}
