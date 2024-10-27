<?php

namespace App\Http\Controllers\Dashboard;

use Inertia\Inertia;
use App\Models\Departement;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DepartementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users =  Departement::all();
        return Inertia::render('Dashboard/Config/Departement/Index',compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/Config/Departement/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $company= auth()->user()->company_id;
        $this->validate($request, [
            'name'     => 'required|string|max:80',
        ]);
        $phone=str_replace(' ','',$request->phone);


        $user= Departement::create([
            'name'     => $request->name,
            'company_id'     => $company,

        ]);
        return redirect()->route('manage-departement.index')->with('success', 'Le departement a été ajouté avec succès !');

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
        $user=Departement::findOrFail($id);
        return Inertia::render('Dashboard/Config/Departement/Edit',compact('user'));

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user=Departement::findOrFail($id);
        // dd($request->all());

        $user->update([
            'name'     => $request->name,
        ]);
        return redirect()->route('manage-departement.index')->with('success', 'Le Departement a été modifier avec succès !');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
