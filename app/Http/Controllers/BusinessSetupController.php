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

    public function type(Request $request){
        session()->put('setup.name',$request->name);
        return Inertia::render('Profile/Business/Screener/2');
    }

    public function location(Request $request){
        session()->put('setup.type',$request->type);
        return Inertia::render('Profile/Business/Screener/3');
    }

    public function hours(Request $request){

        if ($request->checkbox == true) {
            session()->put('setup.address',null);
        }else{
            $address = [
                'line1' =>$request->line1,
                'line2' =>$request->line2,
                'city' =>$request->city,
                'postal_zip' =>$request->postal_zip,
                'state_county_province_region' =>$request->state_county_province_region,
                'country' =>$request->country
            ];
            session()->put('setup.address',$address);
        }

        return Inertia::render('Profile/Business/Screener/4');
    }

    public function workplace(){
        return Inertia::render('Profile/Business/Screener/5');
    }

    
}
