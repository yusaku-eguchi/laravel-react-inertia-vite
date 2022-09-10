<?php

use App\Http\Controllers\User\Auth\AuthenticatedSessionController;
use App\Http\Controllers\User\Auth\ForgotPasswordController;
use App\Http\Controllers\User\Auth\RegisterController;
use App\Http\Controllers\User\HomeController;
use App\Http\Controllers\User\Auth\PasswordResetController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| User Web Routes
|--------------------------------------------------------------------------
*/

Route::middleware('guest')->group(function () {
    Route::get('/', function () {
        return redirect('/login');
    });

    Route::get('register', [RegisterController::class, 'create'])->name('register');
    Route::post('register', [RegisterController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password', [ForgotPasswordController::class, 'index'])->name('forgot-password');
    Route::post('forgot-password', [ForgotPasswordController::class, 'store']);

    Route::get('reset-password/{token}', [PasswordResetController::class, 'create'])->name('password.reset');
    Route::post('reset-password', [PasswordResetController::class, 'store'])->name('password.update');
});

Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('user.logout');

    // 仮登録後にメールを送信したことをユーザーに表示する画面
    Route::get('/email/verify', function (Request $request) {
        if ($request->user()->hasVerifiedEmail())
        {
            return redirect()->intended('/home');
        }

        return Inertia::render('User/Auth/VerifyEmail');
    })->name('verification.notice');

    // 仮登録メールに載っているリンクのアクセス先
    Route::get('/email/verfy/{id}/{hash}', function (EmailVerificationRequest $request) {
        // EmailVerificationRequestでidとhashを自動で検証する
        $request->fulfill();

        return redirect('/home');
    })->middleware('signed')->name('verification.verify');

    // 確認メールの再送信
    Route::post('/email/verification-notification', function (Request $request) {
        if ($request->user()->hasVerifiedEmail())
        {
            return redirect()->intended('/home');
        }

        $request->user()->sendEmailVerificationNotification();

        return back()->with('status', '確認メールを再送しました');
    })->middleware('throttle:6,1')->name('verification.send');

    Route::middleware('verified')->group(function() {
        Route::get('/home', [HomeController::class, 'index'])->name('home');
    });
});
