import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import ScreenerStage from '@/CustomComponents/ScreenerStage';
import { InertiaLink } from '@inertiajs/inertia-react';
export default function Dashboard() {

  function type() {
    alert(3);
  }

  return (
    <AppLayout>

      
      <ScreenerStage />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

          <h1 className="font-bold text-3xl text-center mb-6">Choose your main business type</h1>

          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-20">

            <div className="grid grid-cols-4 gap-5">
              
              <div onClick={type} className="border-2 border-current px-3 pb-3 rounded text-center cursor-pointer">
                <div className="text-right pt-2">
                  <input type="radio" />
                </div>
                <div className="icon-appleinc text-6xl py-3"></div>
                <div>Barber</div>
              </div>

              <div className="border-2 border-current p-3 rounded text-center cursor-pointer">
                <div className="icon-appleinc text-6xl py-3"></div>
                <div>Barber</div>
              </div>

              <div className="border-2 border-current p-3 rounded text-center cursor-pointer">
                <div className="icon-appleinc text-6xl py-3"></div>
                <div>Barber</div>
              </div>

              <div className="border-2 border-current p-3 rounded text-center cursor-pointer">
                <div className="icon-appleinc text-6xl py-3"></div>
                <div>Barber</div>
              </div>

              <div className="border-2 border-current p-3 rounded text-center cursor-pointer">
                <div className="icon-appleinc text-6xl py-3"></div>
                <div>Barber</div>
              </div>

            </div>

            <div>
              <InertiaLink href={'/user/business/location'}>
              <button className="main-bg-c text-white mt-4 w-full text-center rounded p-2.5">Continue</button>
              </InertiaLink>
            </div>

          </div>

        </div>
      </div>
    </AppLayout>
  );
}