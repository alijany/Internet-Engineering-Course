<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/home', function () {
    $user = Auth::user();
    return view('home', ['phone' => $user->phone], ['password' => $user->password]);
})
    ->middleware('auth')
    ->name('home');

Route::get('/', function () {
    return view('customAuthentication');
})->name('login');

Route::post('/login', 'LoginController@login');
Route::post('/register', 'LoginController@register');
Route::post('/update', 'LoginController@update');
Route::post('/delete', 'LoginController@delete');
Route::get('/logout', 'LoginController@logout');
