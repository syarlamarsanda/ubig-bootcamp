<?php

use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\InstalmentController;
use App\Http\Controllers\ValidationController;
use App\Http\Middleware\SocietyAuthMiddleware;
use Illuminate\Support\Facades\Route;


Route::prefix('v1')->group(function () {
    Route::post('/auth/login', [AuthController::class, 'login']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::middleware(SocietyAuthMiddleware::class)->group(function () {
        Route::post('/validation', [ValidationController::class, 'store']);
        Route::get('/validations', [ValidationController::class, 'index']);
        Route::get('/instalment_cars', [InstalmentController::class, 'index']);
        Route::get('/instalment_cars/{id}', [InstalmentController::class, 'show']);
        Route::post('/applications', [ApplicationController::class, 'store']);
        Route::get('/applications', [ApplicationController::class, 'index']);
    });
});
