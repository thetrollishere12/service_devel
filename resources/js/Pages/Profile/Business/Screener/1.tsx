import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import ScreenerStage from '@/CustomComponents/ScreenerStage';

import { InertiaLink } from '@inertiajs/inertia-react';

export default function Dashboard() {
  return (
    <AppLayout>

      <ScreenerStage />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

          <h1 className="font-bold text-3xl text-center mb-6">What's your business name?</h1>

          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-20">

            <div className="text-sm">
              
              <div>Business Name</div>

              <div>
                <input className="border rounded my-2 py-2 px-3 w-full" placeholder={'Enter your business name'}/>
              </div>

              <div>
                <InertiaLink href={'/user/business/type'}>
                <button className="main-bg-c text-white mt-4 w-full text-center rounded p-2.5">Continue</button>
                </InertiaLink>
              </div>

            </div>

          </div>
        </div>
      </div>
    </AppLayout>
  );
}