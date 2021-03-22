<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/auth/login',['uses'=>'AuthController@login','desc'=>'Login'])->name('login');

Route::middleware(['auth:api'])->group(function () {

    Route::resource('user', 'UserController');
    Route::get('me',['uses'=>'UserController@me','desc'=>'View self'])->name('self.view');

    Route::resource('project', 'ProjectController');
    Route::resource('task', 'TaskController');
    Route::post('/task/swap', 'TaskController@swapOrder');


});


// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
