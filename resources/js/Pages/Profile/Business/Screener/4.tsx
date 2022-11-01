import React, { useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import ScreenerStage from '@/CustomComponents/ScreenerStage';
import Checkbox from '@/Components/Checkbox';
import SelectHours from '@/CustomComponents/SelectHours';
import classNames from 'classnames';
import PrimaryButton from '@/Components/PrimaryButton';

import { InertiaLink, useForm } from '@inertiajs/inertia-react';
import { floor } from 'lodash';

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

  const [date, setInputFields] = useState([
    [{ from: 0, to: 95, status: "add" }],
    [{ from: 0, to: 95, status: "add" }],
    [{ from: 0, to: 95, status: "add" }],
    [{ from: 0, to: 95, status: "add" }],
    [{ from: 0, to: 95, status: "add" }],
    [{ from: 0, to: 95, status: "add" }],
    [{ from: 0, to: 95, status: "add" }],
  ] as any);
  const [checkState, setCheckState] = useState([true, false, false, false, false, false, false]);
  const [nextHref, setNextHref] = useState("/user/business/workplace");

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var tmpDate = {} as any
  tmpDate["Monday"] = [{ from: 0, to: 95, status: "add" }];
  const form = useForm({
    date: tmpDate as any,
  })

  // console.log(date);

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
    days.map((data, i) => {
      tmpDate[data] = checkState[i] ? date[i] : [];
    })
    form.setData('date', tmpDate);

  }

  function onChangeCheck(day: number) {
    checkState[day] = !checkState[day];
    setCheckState([...checkState]);
    var checkCnt = 0;
    checkState.map(data => data && checkCnt++);
    if (checkCnt != 0) {
      setNextHref("/user/business/workplace");
    } else {
      setNextHref("#");
    }

    if (!checkState[day]) {
      date[day] = [{ from: 0, to: 95, status: "add" }];
      setInputFields([...date]);
    }
    days.map((data, i) => {
      tmpDate[data] = checkState[i] ? date[i] : [];
    })
    form.setData('date', tmpDate);

  }

  function onChangeHour(index: any, sub: any, value: any) {
    date[index][sub] = value;
    setInputFields([...date]);
    days.map((data, i) => {
      tmpDate[data] = checkState[i] ? date[i] : [];
    })
    form.setData('date', tmpDate);
  }

  function convertDateFormat(value: any) {
    let hr, mm;
    hr = floor(parseInt(value) * 15 / 60);
    mm = parseInt(value) * 15 % 60;
    if (hr < 10)
      hr = "0" + hr;
    if (mm < 10)
      mm = "0" + mm;
    return hr + ":" + mm;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    days.map((data, i) => {
      tmpDate[data] = checkState[i] ? date[i] : [];
    })
    form.setData('date', tmpDate);


    form.post("/user/business/workplace", {
      onFinish: () => form.reset(),
    });
  }

  return (
    <AppLayout title="title">

      <ScreenerStage />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

          <h1 className="font-bold text-3xl text-center mb-6">Add your store working hours</h1>

          <form onSubmit={onSubmit}>
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
                        : date[i].map((data: any, j: any) =>
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

              <div>
                {/* <InertiaLink href={nextHref}> */}
                <PrimaryButton
                  className={classNames('main-bg-c text-white mt-4 w-full text-center rounded p-2.5')}
                  disabled={nextHref == "#"}
                  style={{ cursor: nextHref == "#" ? "no-drop" : "grab", height: "2.5rem" }}>

                  Continue</PrimaryButton>
                {/* <button className="main-bg-c text-white mt-4 w-full text-center rounded p-2.5" disabled={nextHref == "#"} style={{ cursor: nextHref == "#" ? "no-drop" : "grab" }}>Continue</button> */}
                {/* </InertiaLink> */}
              </div>

            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  );
}