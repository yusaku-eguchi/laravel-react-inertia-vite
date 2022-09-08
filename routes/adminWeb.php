<?php

use App\Http\Controllers\Admin\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Admin\RegisterController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Admin Web Routes
|--------------------------------------------------------------------------
*/


Route::get('register', [RegisterController::class, 'create'])->name('admin.register');
Route::post('register', [RegisterController::class, 'store']);
Route::get('login', [AuthenticatedSessionController::class, 'create'])->name('admin.login');
Route::post('login', [AuthenticatedSessionController::class, 'store']);
Route::get('/', function () {
    if (! Auth::guard('admin')->check())
    {
        return redirect('/login');
    }
    return redirect('/home');
});
Route::middleware('auth:admin')->group(function () {
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('admin.logout');
    Route::get('home', function () {
        return Inertia::render('Admin/Home');
    })->name('admin.home');
});
