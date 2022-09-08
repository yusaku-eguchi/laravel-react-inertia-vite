<?php

use App\Http\Controllers\Admin\Auth\AuthenticatedSessionController as AdminAuthSessionController;
use App\Http\Controllers\User\Auth\AuthenticatedSessionController as UserAuthSessionController;
use App\Http\Controllers\Admin\RegisterController;
use App\Http\Controllers\User\Auth\RegisterController as UserRegisterController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::domain(config('app.admin_subdomain') . '.' . config('app.domain'))->group(function () {
    Route::get('register', [RegisterController::class, 'create'])->name('admin.register');
    Route::post('register', [RegisterController::class, 'store']);

    Route::get('login', [AdminAuthSessionController::class, 'create'])->name('admin.login');
    Route::post('login', [AdminAuthSessionController::class, 'store']);

    Route::get('/', function () {
        if (! Auth::guard('admin')->check())
        {
            return redirect('/login');
        }

        return redirect('/home');
    });

    Route::middleware('auth:admin')->group(function () {

        Route::post('logout', [AdminAuthSessionController::class, 'destroy'])->name('admin.logout');

        Route::get('home', function () {
            return Inertia::render('Admin/Home');
        })->name('admin.home');
    });
});

Route::get('/', function () {
    if (Auth::check())
    {
        return redirect('/home');
    }

    return redirect('/login');
});

Route::get('register', [UserRegisterController::class, 'create'])->name('register');
Route::post('register', [UserRegisterController::class, 'store']);

Route::get('login', [UserAuthSessionController::class, 'create'])->name('login');
Route::post('login', [UserAuthSessionController::class, 'store']);

Route::middleware('auth')->group(function () {
    Route::post('logout', [UserAuthSessionController::class, 'destroy'])->name('logout');

    Route::get('home', function () {
        return Inertia::render('User/Home');
    })->name('user.home');
});
