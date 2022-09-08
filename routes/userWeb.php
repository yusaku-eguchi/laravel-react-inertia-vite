<?php

use App\Http\Controllers\User\Auth\AuthenticatedSessionController;
use App\Http\Controllers\User\Auth\RegisterController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| User Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    if (Auth::check())
    {
        return redirect('/home');
    }

    return redirect('/login');
});

Route::get('register', [RegisterController::class, 'create'])->name('register');
Route::post('register', [RegisterController::class, 'store']);

Route::get('login', [AuthenticatedSessionController::class, 'create'])->name('login');
Route::post('login', [AuthenticatedSessionController::class, 'store']);

Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('user.logout');

    Route::get('home', function () {
        return Inertia::render('User/Home');
    })->name('user.home');
});
