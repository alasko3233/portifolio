<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontendController extends Controller
{
    public function accueil(){
        return Inertia::render('Frontend/Accueil');

    }
    public function skillz(){
        
    }
    public function project(){
        return Inertia::render('Frontend/Project/Index');
        
    }
    public function projectShow($id){
        
        return Inertia::render('Frontend/Project/Show',compact('id'));
        
    }
    public function contact(){
        return Inertia::render('Frontend/Contact');
        
    }
    public function about(){
        return Inertia::render('Frontend/About');
        
    }
}
