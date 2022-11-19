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

          <h1 className="font-bold text-3xl text-center mb-6">Start adding services</h1>

          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-20">

            

          </div>

        </div>
      </div>
    </AppLayout>
  );
}