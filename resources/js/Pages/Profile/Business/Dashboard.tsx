import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import BusinessLeftNav from '@/CustomComponents/BusinessLeftNav';



export default function Dashboard() {
  return (
    <AppLayout>
      <BusinessLeftNav />
      <div>
        <div className="mx-auto">

          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-20">

            <div className="grid grid-cols-2 gap-2">
              
              <div className="border rounded p-2">d</div>
              <div className="border rounded p-2">d</div>
              <div className="border rounded p-2">d</div>
              <div className="border rounded p-2">d</div>

            </div>

          </div>
        </div>
      </div>
    </AppLayout>
  );
}