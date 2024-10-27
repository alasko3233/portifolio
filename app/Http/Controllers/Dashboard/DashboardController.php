<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Archive;
use App\Models\Company;
use App\Models\Departement;
use App\Models\ArchiveLocal;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    $auth = auth()->user();
    switch (true) {
        //  case $auth->hasRole(['Responsable Regional', 'MINISTERE', 'Super Admin']):
        //      $paymentsQuery->whereDate('date_payement', Carbon::today());
        //      break;
     
         case $auth->hasRole(['Super Admin']):
     
         case $auth->hasRole('Admin'):


        
     }
        return Inertia::render('Dashboard');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
