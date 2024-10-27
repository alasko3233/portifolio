<?php

namespace App\Http\Controllers\Dashboard;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\ArchiveLocal;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArchiveLocalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    $auth = auth()->user();

        $user_id = auth()->user()->company_id;
        $departement_id = auth()->user()->departement_id;

        $users = null;
        switch (true) {
            //  case $auth->hasRole(['Responsable Regional', 'MINISTERE', 'Super Admin']):
            //      $paymentsQuery->whereDate('date_payement', Carbon::today());
            //      break;
         
             case $auth->hasRole(['Super Admin']):
                $users = ArchiveLocal::all()->with(['company','user']);
                       break;
         
             case $auth->hasRole('Admin'):
                $users = ArchiveLocal::all()->with(['company','user']);

                    break;
    
             case $auth->hasRole('Entreprise'):
        $users = ArchiveLocal::where('company_id', $user_id)->with(['company','user'])->get();

        case $auth->hasRole(['ChefD','Employee']):
            $users = ArchiveLocal::where('company_id', $user_id)->where('departement_id',$departement_id)->with(['company','user'])->get();
            
         }
    

        return Inertia::render('Dashboard/Archive/Local/Index',compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/Archive/Local/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = auth()->user();

        $company= auth()->user()->company_id;
        $departement= auth()->user()->departement_id;

        $this->validate($request, [
            'name'     => 'required|string|max:80',
        ]);
        $phone=str_replace(' ','',$request->phone);

        $user= ArchiveLocal::create([
            'name'     => $request->name,
            'date_archivage'=> Carbon::now(),
            'user_id'=>$user->id,

            'company_id'=>$user->company_id,
            'departement_id'=>$user->departement_id,


        ]);
        return redirect()->route('manage-archivelocal.index')->with('success', "L'archive a été ajouté avec succès !");

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
        $user=ArchiveLocal::findOrFail($id);
        return Inertia::render('Dashboard/Archive/Local/Edit',compact('user'));

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user=ArchiveLocal::findOrFail($id);
        // dd($request->all());
        $phone=str_replace(' ','',$request->phone);

        $user->update([
            'name'     => $request->name,
        ]);
        return redirect()->route('manage-archivelocal.index')->with('success', "L'archive a été modifier avec succès !");

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

}
