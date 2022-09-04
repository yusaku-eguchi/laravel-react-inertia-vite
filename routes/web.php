<?php

use App\Http\Controllers\Admin\RegisterController;
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

Route::get('/', function () {

});

Route::get('register', [RegisterController::class, 'create'])->name('admin.register');

Route::post('register', [RegisterController::class, 'store']);

Route::get('/home', function () {
    return Inertia::render('Admin/Home');
})->middleware(['auth:admin'])->name('admin.home');
