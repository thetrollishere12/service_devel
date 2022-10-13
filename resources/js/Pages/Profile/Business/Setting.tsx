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
              
              <div className="border rounded">
                <h2 className="main-t-c font-bold text-xl px-4 py-6">Account Setup</h2>

                <div>
                  
                  <div className="p-4 border-t">
                    <h3 className="font-bold main-t-c">Business Details</h3>
                    <div className="text-sm text-gray-500">Manage settings such as your business name and time zone</div>
                  </div>

                  <div className="p-4 border-t">
                    <h3 className="font-bold main-t-c">Location</h3>
                    <div className="text-sm text-gray-500">Manage settings such as your business name and time zone</div>
                  </div>

                  <div className="p-4 border-t">
                    <h3 className="font-bold main-t-c">Online booking</h3>
                    <div className="text-sm text-gray-500">Manage settings such as your business name and time zone</div>
                  </div>

                </div>

              </div>


            </div>

          </div>
        </div>
      </div>
    </AppLayout>
  );
}