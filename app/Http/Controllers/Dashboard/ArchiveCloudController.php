<?php

namespace App\Http\Controllers\Dashboard;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Archive;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArchiveCloudController extends Controller
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
                $users = Archive::all()->with(['company','user']);
                       break;
         
             case $auth->hasRole('Admin'):
                $users = Archive::all()->with(['company','user']);

                    break;
    
             case $auth->hasRole('Entreprise'):
        $users = Archive::where('company_id', $user_id)->with(['company','user'])->get();

             case $auth->hasRole(['ChefD','Employee']):
                $users = Archive::where('company_id', $user_id)->where('departement_id',$departement_id)->with(['company','user'])->get();
            
         }

        // dd($user_id);
        return Inertia::render('Dashboard/Archive/Cloud/Index',compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/Archive/Cloud/Create');

    }
    public function saveFile($image,$company_name)
    {
        $file_extension = $image->getClientOriginalExtension();
        $date = time();
        $file =$image->getClientOriginalName();
        $filename = pathinfo($file, PATHINFO_FILENAME);
        $extension = pathinfo($file, PATHINFO_EXTENSION);

        $name = 'membre';
        $image_name = $filename . '_' . $date . '.' . $file_extension;

        $path = public_path() . "/assets/files/archive/cloud/".$company_name;
        $path_name = "/assets/files/archive/cloud/".$company_name.'/'.$image_name;

        // dd($path);
        $image_path= asset($path_name);
        //  dd($image_path);

        $image->move($path, $image_name);
    
        return ['image_name'=>$image_name,'path'=>$image_path];
    }
    

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
            $images = $request->file('files');
            // dd($images);
        $company_name = auth()->user()->company->name;
        // dd($user_id);
        $user = auth()->user();
        $company= auth()->user()->company_id;
        $departement= auth()->user()->departement_id;

            foreach ($images as $image) {
                // dd($image->getClientOriginalName());
                $imgName = $this->saveFile($image,$company_name);
                $file =$image->getClientOriginalName();
                $filename = pathinfo($file, PATHINFO_FILENAME);
                $extension = pathinfo($file, PATHINFO_EXTENSION);
                // dd($imgName);
                               // Faites ce que vous voulez avec $imgName
                // Par exemple, vous pouvez le stocker dans une base de données
                $archive= Archive::create([
                    'name' => $file,
                    'type'=>$extension,
                    'file'=>$imgName['image_name'],
                    'date_archivage'=> Carbon::now(),
                    'user_id'=>$user->id,
                    'company_id'=>$user->company_id,
                    'departement_id'=>$user->departement_id,
                    'path'=>$imgName['path'],
                ]);
 
            }
        return redirect()->route('manage-archivecloud.index')->with('success', 'Les fichiers ont été ajouté avec succès !');

        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $archive=Archive::findOrFail($id);
        // dd($archive);
        return Inertia::render('Dashboard/Archive/Cloud/Show',compact('archive'));

        
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
