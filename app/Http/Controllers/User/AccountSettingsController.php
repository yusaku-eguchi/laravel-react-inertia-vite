<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AccountSettingsController extends Controller
{
    public function edit()
    {
        $user = Auth::user();

        return Inertia::render('User/AccountSettings', [
            'user' => $user
        ]);
    }

    public function update(Request $request)
    {
        // $avatar
        // Storage::put('testfile.png', )
        $path = $request->file('avatar')->store('/');
        \Log::warning($path);
        return redirect('/account/settings');
    }
}
