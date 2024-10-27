<?php

namespace App\Http\Controllers\Dashboard;

use Inertia\Inertia;
use App\Models\User;
use App\Models\Departement;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;

class ChefDepartementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users =  User::role([
            'ChefD'
            ])->with('departement')->get();
            // dd($users);
        return Inertia::render('Dashboard/Config/Chef/Index',compact('users'));
        }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $departements = Departement::all();
        return Inertia::render('Dashboard/Config/Chef/Create',compact('departements'));

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //  dd($request->all());
        $company= auth()->user()->company_id;

        $this->validate($request, [
            'username'     => 'required|string|max:80',
            'departement'     => 'required|string',
            'firstname'     => 'required|string|max:80',
            'lastname'         => 'required|string|max:80',
            'phone'         => 'required|unique:users,phone|min:8|max:8',
            'email'         => 'required|email|unique:users,email|max:70',
            
        ]);
        $password = '00000000';
        $token = Str::random(64);

        $phone=str_replace(' ','',$request->phone);

         $user= User::create([
             'name'     => $request->username,
             'firstname'     => $request->firstname,
             'lastname'     => $request->lastname,
             'phone'         => $phone,
             'email'         => $request->email,
             'departement_id'         => $request->departement,
             'company_id'         => $company,
             'password'         => Hash::make($password),

         ]);
         $user->assignRole("Chefd");
        return redirect()->route('manage-chefd.index')->with('success', 'L\' utilisateur a été ajouté avec succès !');
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
        $departements = Departement::all();

        $user=User::findOrFail($id);
        return Inertia::render('Dashboard/Config/Chef/Edit',compact('user', 'departements'));

        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user=User::findOrFail($id);
        // dd($request->all());
        $phone=str_replace(' ','',$request->phone);

        $user->update([
            'name'     => $request->username,
            'firstname'     => $request->firstname,
            'lastname'     => $request->lastname,
            'phone'         => $phone,
            'departement_id'         => $request->departement,
            'email'         => $request->email,
        ]);
        return redirect()->route('manage-chefd.index')->with('success', 'L\' utilisateur a été modifier avec succès !');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
