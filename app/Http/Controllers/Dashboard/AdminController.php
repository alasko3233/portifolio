<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users =  User::role([
            'Admin'
            ])->get();
        return Inertia::render('Dashboard/Config/Admin/Index',compact('users'));
        }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/Config/Admin/Create');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $this->validate($request, [
            'username'     => 'required|string|max:80',
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
             'password'         => Hash::make($password),

         ]);
         $user->assignRole("Admin");
        return redirect()->route('manage-admin.index')->with('success', 'L\' utilisateur a été ajouté avec succès !');
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
        $user=User::findOrFail($id);
        return Inertia::render('Dashboard/Config/Admin/Edit',compact('user'));

        
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
            'email'         => $request->email,
        ]);
        return redirect()->route('manage-admin.index')->with('success', 'L\' utilisateur a été modifier avec succès !');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
