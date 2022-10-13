import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import ScreenerStage from '@/CustomComponents/ScreenerStage';
import Checkbox from '@/Components/Checkbox';

import { InertiaLink } from '@inertiajs/inertia-react';

export default function Dashboard() {
  return (
    <AppLayout>
      
      <ScreenerStage />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

          <h1 className="font-bold text-3xl text-center mb-6">Show off your workplace</h1>

          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-20">

            <div className="border border-dashed text-center p-8">

                <div>Add workplace photo.</div>
                <div>This is optional, but highly recommended. Show your clients what you're all about</div>

            </div>

            <div>
              <InertiaLink href={'/business/dashboard'}>
              <button className="main-text-c border main-border-c mt-4 w-full text-center rounded p-2.5 font-bold">Skip</button>
              </InertiaLink>
            </div>

          </div>

        </div>
      </div>
    </AppLayout>
  );
}