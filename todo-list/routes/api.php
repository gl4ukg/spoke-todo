<?php

use App\Http\Controllers\TaskController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/task', [TaskController::class, 'show']);
Route::get('/task/{task}', [TaskController::class, 'getById']);
Route::post('/task', [TaskController::class, 'create']);
Route::put('/task/{task}', [TaskController::class, 'edit']);
Route::delete('/task/{task}', [TaskController::class, 'delete']);
Route::put('/task/done/{task}', [TaskController::class, 'updateDoneStatus']);




