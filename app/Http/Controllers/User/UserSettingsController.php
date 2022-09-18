<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
// use PragmaRx\Google2FA\Google2FA;

class UserSettingsController extends Controller
{
    /**
     * Display the user settings view
     *
     * @return Inertia\Response
     */
    public function index()
    {
        return Inertia::render('User/UserSettings');
    }
}
