<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\Dashboard\AdminController;
use App\Http\Controllers\Dashboard\ClientController;
use App\Http\Controllers\Dashboard\PostController;

use App\Http\Controllers\Dashboard\CompanyController;
use App\Http\Controllers\Dashboard\EmployeeController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Dashboard\SuperAdminController;
use App\Http\Controllers\Dashboard\DepartementController;
use App\Http\Controllers\Dashboard\ArchiveCloudController;
use App\Http\Controllers\Dashboard\ArchiveLocalController;
use App\Http\Controllers\Dashboard\ChefDepartementController;

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

// Route::get('/', function () {
//     // return redirect()->route('dashboard');

//      return Inertia::render('Frontend/Accueil');
//     // return Inertia::render('Welcome', [s
//     //     'canLogin' => Route::has('login'),
//     //     'canRegister' => Route::has('register'),
//     //     'laravelVersion' => Application::VERSION,
//     //     'phpVersion' => PHP_VERSION,
//     // ]);
// })->name('accueil');

Route::get('/', [FrontendController::class, 'accueil'])->name('accueil');
Route::get('/skillz', [FrontendController::class, 'skillz'])->name('skillz');
Route::get('/project', [FrontendController::class, 'project'])->name('project');
Route::get('/project/{id}', [FrontendController::class, 'projectShow'])->name('project.show');
Route::get('/contact', [FrontendController::class, 'contact'])->name('contact');
Route::get('/about', [FrontendController::class, 'about'])->name('about');
Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::resource('/manage-admin', AdminController::class);
    Route::resource('/manage-superadmin', SuperAdminController::class);
    Route::resource('/manage-posts', PostController::class);
    Route::resource('/manage-company', CompanyController::class);
    Route::resource('/manage-archivelocal', ArchiveLocalController::class);
    Route::resource('/manage-archivecloud', ArchiveCloudController::class);
    Route::resource('/manage-departement', DepartementController::class);
    Route::resource('/manage-chefd', ChefDepartementController::class);
    Route::resource('/manage-employee', EmployeeController::class);
    
    Route::resource('/manage-client', ClientController::class);
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
