<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Company;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Inertia\Inertia;


class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users =  Company::all();
        return Inertia::render('Dashboard/Config/Company/Index',compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/Config/Company/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name'     => 'required|string|max:80',
            'address'     => 'required|string|max:80',
            'phone'         => 'required|unique:users,phone|min:8|max:8',
        ]);
        $phone=str_replace(' ','',$request->phone);

        $user= Company::create([
            'name'     => $request->name,
            'address'     => $request->address,
            'phone'         => $phone,

        ]);
        return redirect()->route('manage-company.index')->with('success', 'La company a été ajouté avec succès !');

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
        $user=Company::findOrFail($id);
        return Inertia::render('Dashboard/Config/Company/Edit',compact('user'));

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user=Company::findOrFail($id);
        // dd($request->all());
        $phone=str_replace(' ','',$request->phone);

        $user->update([
            'name'     => $request->name,
            'address'     => $request->address,
            'phone'         => $phone,
        ]);
        return redirect()->route('manage-company.index')->with('success', 'La company a été modifier avec succès !');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
