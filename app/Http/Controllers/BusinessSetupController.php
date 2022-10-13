<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BusinessSetupController extends Controller
{
    public function start(){
        return Inertia::render('Profile/Business/Screener/0');
    }

    public function name(){
        return Inertia::render('Profile/Business/Screener/1');
    }

    public function type(){
        return Inertia::render('Profile/Business/Screener/2');
    }

    public function location(){
        return Inertia::render('Profile/Business/Screener/3');
    }

    public function hours(){
        return Inertia::render('Profile/Business/Screener/4');
    }

    public function workplace(){
        return Inertia::render('Profile/Business/Screener/5');
    }
}
