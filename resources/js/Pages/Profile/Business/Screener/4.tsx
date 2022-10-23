import React, { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import ScreenerStage from '@/CustomComponents/ScreenerStage';
import Checkbox from '@/Components/Checkbox';
import SelectHours from '@/CustomComponents/SelectHours';

import { InertiaLink } from '@inertiajs/inertia-react';

type period = {
  from: string;
  to: string;
}

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



  // {
  //   from: 0,
  //     to: 24
  // }

  const [date, setInputFields] = useState([
    [{ from: 0, to: 95, status: "add" }],
    [{ from: 0, to: 95, status: "add" }],
    [{ from: 0, to: 95, status: "add" }],
    [{ from: 0, to: 95, status: "add" }],
    [{ from: 0, to: 95, status: "add" }],
    [{ from: 0, to: 95, status: "add" }],
    [{ from: 0, to: 95, status: "add" }],
  ]);
  const [checkState, setCheckState] = useState([false, false, false, false, false, false, false]);

  const days = ["Monday", "Thursday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  console.log(date);

  function add(day: any, sub: any) {
    if (checkState[day]) {
      if (date[day][sub].status == "add") {
        date[day][sub].status = "delete"
        date[day].push({ from: 0, to: 95, status: "add" });
        if (date[day].length == 0) {
          checkState[day] = false;
          setCheckState([...checkState]);
        }
      } else {
        date[day].splice(sub, 1);
      }
      setInputFields([...date]);
    }

  }

  function onChangeCheck(day: number) {
    checkState[day] = !checkState[day];
    setCheckState([...checkState]);

    if (!checkState[day]) {
      date[day] = [{ from: 0, to: 95, status: "add" }];
      setInputFields([...date]);
    }
  }

  function onChangeHour(index: any, sub: any, value: any) {
    date[index][sub] = value;
    setInputFields([...date]);
  }

  return (
    <AppLayout title="title">

      <ScreenerStage />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

          <h1 className="font-bold text-3xl text-center mb-6">Add your store working hours</h1>

          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-20">

            {
              days.map((day, i) =>
                <div className="grid grid-cols-3 py-2">

                  <div className="col-span-1">
                    <Checkbox onChange={() => onChangeCheck(i)} checked={checkState[i]} />
                    <span className="pl-4">{day}</span>
                  </div>

                  <div className="col-span-2 gap-4 items-center">
                    {checkState[i] == false ?
                      <div className="pl-2">Closed</div>
                      : date[i].map((data, j) =>
                        <div className='flex gap-4 p-1'>
                          <SelectHours change={onChangeHour} index={i} sub={j} term={data} />
                          <div onClick={() => add(i, j)} className="text-2xl main-t-c cursor-pointer">{date[i][j].status == "add" ? "+" : <span className="text-red-600">×</span>}</div>
                        </div>
                      )
                    }
                    {/* {date.monday.map(date => (
                      <SelectHours></SelectHours>
                    ))} */}

                  </div>

                </div>
              )
            }
            {/* <div className="grid grid-cols-3 py-2">

              <div className="col-span-1">
                <Checkbox checked />
                <span className="pl-4">Monday</span>
              </div>

              <div className="col-span-2 flex gap-4 items-center">
                <div className="pl-2">Closed</div>
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

            </div> */}

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