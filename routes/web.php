<?php

use Illuminate\Foundation\Application;
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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('dashboard');

Route::get('/b/{id}',function(){
    return Inertia::render('Business/Profile');
})->name('b');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {


    // Route::get('/dashboard', function () {
    //     return Inertia::render('Dashboard');
    // })->name('dashboard');


    Route::resource('user/payment-method', 'PaymentMethodController');



    Route::get('user/billing',function(){
        return Inertia::render('Profile/User/Billing');
    })->name('profile.billing');


    Route::get('user/booking',function(){
        return Inertia::render('Profile/User/Booking');
    })->name('profile.booking');



    // Business SetUp

    Route::match(['get','post'],'user/business/start','BusinessSetupController@start')->name('profile.business.start');

    Route::match(['get','post'],'user/business/name','BusinessSetupController@name')->name('profile.business.name');

    Route::match(['get','post'],'user/business/type','BusinessSetupController@type')->name('profile.business.type');

    Route::match(['get','post'],'user/business/location','BusinessSetupController@location')->name('profile.business.location');

    Route::match(['get','post'],'user/business/hours','BusinessSetupController@hours')->name('profile.business.hours');

    Route::match(['get','post'],'user/business/workplace','BusinessSetupController@workplace')->name('profile.business.workplace');

    Route::get('business/dashboard','BusinessController@index');

    Route::resource('business/category', 'CategoryController');

    Route::resource('business/service', 'ServiceController');

    Route::get('business/transaction','BusinessController@transaction');

    Route::get('business/setting','BusinessController@setting');

});
