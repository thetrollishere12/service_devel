import React,{ useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import ScreenerStage from '@/CustomComponents/ScreenerStage';
import Checkbox from '@/Components/Checkbox';
import SelectHours from '@/CustomComponents/SelectHours';

import { InertiaLink } from '@inertiajs/inertia-react';

export default function Dashboard() {

    // constructor(){
    //     super(){

    //         this.state = {
    //             "monday": [
    //             {
    //                 "from":0,
    //                 "to":24
    //             },{
    //                 "from":0,
    //                 "to":24
    //             }],
    //             "tuesday":[],
    //             "wednesday":[],
    //             "thursday":[],
    //             "friday":[],
    //             "saturday":[],
    //             "sunday":[],
    //         };

    //     }
    // }


    const [date, setInputFields] = useState({
        monday: [
        {
            from:0,
            to:24
        },{
            from:0,
            to:24
        }],
        tuesday:[],
        wednesday:[],
        thursday:[],
        friday:[],
        saturday:[],
        sunday:[],
    });

    console.log(date);

    function add(day) {
        setInputFields([...date, {
            from:0,
            to:24
        }])
        console.log(date);
    }


  return (
    <AppLayout>

      <ScreenerStage />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

          <h1 className="font-bold text-3xl text-center mb-6">Add your store working hours</h1>

          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-20">

            <div className="grid grid-cols-3 py-2">

                <div className="col-span-1">
                  <Checkbox checked />
                  <span className="pl-4">Monday</span>
                </div>

                <div className="col-span-2 flex gap-4 items-center">
                    {date.monday.map(date => (
                        <SelectHours></SelectHours>
                    ))}
                    <div onClick={() => add('monday')} className="text-2xl main-t-c cursor-pointer">+</div>
                </div>

            </div>

            <div className="grid grid-cols-3 py-2">

                <div className="col-span-1">
                  <Checkbox />
                  <span className="pl-4">Thursday</span>
                </div>

                <div className="col-span-2 flex gap-4 items-center">
                    <div className="pl-2">Closed</div>
                </div>

            </div>

            <div className="grid grid-cols-3 py-2">

                <div className="col-span-1">
                  <Checkbox />
                  <span className="pl-4">Wednesday</span>
                </div>

                <div className="col-span-2 flex gap-4 items-center">
                    <div className="pl-2">Closed</div>
                </div>

            </div>

            <div className="grid grid-cols-3 py-2">

                <div className="col-span-1">
                  <Checkbox />
                  <span className="pl-4">Thursday</span>
                </div>

                <div className="col-span-2 flex gap-4 items-center">
                    <div className="pl-2">Closed</div>
                </div>

            </div>

            <div className="grid grid-cols-3 py-2">

                <div className="col-span-1">
                  <Checkbox />
                  <span className="pl-4">Friday</span>
                </div>

                <div className="col-span-2 flex gap-4 items-center">
                    <div className="pl-2">Closed</div>
                </div>

            </div>

            <div className="grid grid-cols-3 py-2">

                <div className="col-span-1">
                  <Checkbox />
                  <span className="pl-4">Saturday</span>
                </div>

                <div className="col-span-2 flex gap-4 items-center">
                    <div className="pl-2">Closed</div>
                </div>

            </div>

            <div className="grid grid-cols-3 py-2">

                <div className="col-span-1">
                  <Checkbox />
                  <span className="pl-4">Sunday</span>
                </div>

                <div className="col-span-2 flex gap-4 items-center">
                    <div className="pl-2">Closed</div>
                </div>

            </div>

            <div>
            <InertiaLink href={'/user/business/workplace'}>
              <button className="main-bg-c text-white mt-4 w-full text-center rounded p-2.5">Continue</button>
              </InertiaLink>
            </div>

          </div>

        </div>
      </div>
    </AppLayout>
  );
}