<?php

namespace App\Http\Controllers\User\Auth;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Http\Requests\User\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('User/Auth/Login', [
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     *
     * @param \App\Http\Requests\LoginRequest $request an login request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(LoginRequest $request)
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect('/home');
    }

    /**
     * Destroy an authenticated session
     *
     * @param \Illuminate\Http\Request $request a request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
