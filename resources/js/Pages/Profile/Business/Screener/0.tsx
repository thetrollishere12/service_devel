import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Dashboard() {
  return (
    <AppLayout
      title="Dashboard"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Bookings
        </h2>
      )}
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">



          <div>
            <img/>
          </div>

          <div className="pb-8">
            
            <h1 className="text-center font-bold text-5xl">Join With Us!</h1>

            <div className="text-center my-8">

              <InertiaLink
                href={route('profile.business.name')}
                className="main-bg-c text-white rounded-full py-2 px-8 hover:text-white"
              >Open Shop Now
              </InertiaLink>
            </div>

          </div>



          <div className="max-w-3xl mx-auto">
            
            <div>
              <h2 className="font-bold text-3xl py-4">A Simple, Trusted & Secure Platform</h2>
              <div className="text-xl grid grid-cols-2 gap-3 text-green-500">
                <h3><span className="icon-checkmark pr-2"></span>No Hidden Fees</h3>
                <h3><span className="icon-checkmark pr-2"></span>No Monthly Fees</h3>
                <h3><span className="icon-checkmark pr-2"></span>No Listing Fees</h3>
                <h3><span className="icon-checkmark pr-2"></span>Secure & Transparent Transaction</h3>
                <h3><span className="icon-checkmark pr-2"></span>Seller & Fraud Protection</h3>
              </div>
            </div>

            <div className="py-4">
              <h3 className="font-bold text-3xl py-2">No Listing Fees For New Sellers!</h3>
              <div className="text-lg">Enjoy listing as many as you want for free!</div>
            </div>

            <div>
              <h3 className="font-bold text-3xl py-2">xd  % Platform fees + 2.9%+0.30 payment processing fee</h3>
              <div className="text-lg">When a product is sold, a small commision & payment processing fee will be applied.</div>
            </div>

          </div>

            
          <div className="pt-24 grid grid-cols-2">
            <div>
              <img/>
            </div>
            <div className="p-3">
              <h3 className="font-bold text-3xl">Reach Customers Worldwide!</h3>

              <h4 className="font-bold">Increase Your Reach</h4>

              <h4 className="font-bold">Attract Potential Customers</h4>

            </div>
          </div>




          </div>
        </div>
      </div>
    </AppLayout>
  );
}
