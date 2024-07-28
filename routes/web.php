<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\TicketsController;

Route::get('/',[HomeController::class,'home'])->name('home');

Route::get('main-event/{id}',[HomeController::class,'event'])->name('main-event');
Route::get('book-event/{id}',[HomeController::class,'book'])->name('book-event');




Route::group(['middleware' => 'guest'], function () {
    Route::get('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/register', [AuthController::class, 'registerPost'])->name('register');
    Route::get('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/login', [AuthController::class, 'loginPost'])->name('login');
});
Route::group(['middleware' => 'auth'], function () {
    Route::delete('/logout', [AuthController::class, 'logout'])->name('logout');

    Route::get('admin',[HomeController::class,'index'])->name('admin');
    Route::resource('events',EventsController::class);
    Route::resource('categories',CategoriesController::class);
    Route::resource('tickets',TicketsController::class);

});
