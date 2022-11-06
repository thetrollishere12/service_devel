<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        // $appointment = Appointment::all();
        // return Inertia::render('Appointment/Index', ['appointments' => $appointment]);
        return Appointment::select('start_date','end_date','service')->get();
    }

    public function day($day){
        $appointment = Appointment::all();
        // !$day && $day = "2022-11-05";
        return Inertia::render('Profile/Business/Calendar/day', ['appointments' => $appointment, 'day' => $day]);
        // return Inertia::render('Profile/Business/Calendar/day');
    }

    
    public function calendar(){ //$month = null
        $appointment = Appointment::all();
        // !$month && $month = "2022-11";
        return Inertia::render('Profile/Business/Calendar/calendar', ['appointments' => $appointment]); //, 'month' => $month
        
        // return Inertia::render('Profile/Business/Calendar/calendar');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show(Appointment $appointment)
    {
        //
        return response()->json([
            'appointment'=>$appointment
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Appointment $appointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Appointment $appointment)
    {
        //
    }
}
