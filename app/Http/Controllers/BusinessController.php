<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BusinessController extends Controller
{

    public function index(){
        return Inertia::render('Profile/Business/Dashboard');
    }

    public function transaction(){
        return Inertia::render('Profile/Business/Transaction');
    }

    public function setting(){
        return Inertia::render('Profile/Business/Setting');
    }

}
