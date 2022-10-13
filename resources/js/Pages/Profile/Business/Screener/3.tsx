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

          <h1 className="font-bold text-3xl text-center mb-6">Set your location</h1>

          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-20">

            <div className="">
              
              <div className="font-bold mb-6">Business location</div>

              <div>Where's your business located?</div>

              <div>
                <input className="border rounded my-2 py-2 px-3 w-full" placeholder={'Enter your business address'}/>
              </div>

              <div class="customer_address_container">
                 <select class="block w-full outline-none p-2 border-x border-b-0 border-gray-200 rounded-t-md" name="country">
                    <option value="CA">Canada</option>
                 </select>
                 <input class="block w-full outline-none p-2 border-x border-t border-b-0 border-gray-200" placeholder="Address Line 1" required type="" name="line1"/>
                 <input class="block w-full outline-none p-2 border-x border-t border-b-0 border-gray-200" placeholder="Address Line 2" type="" name="line2"/>
                 <input class="block w-full outline-none p-2 border-x border-t border-b-0 border-gray-200" placeholder="City" type="" required name="city"/>
                 <select class="block w-full outline-none p-2 border-x border-b-0 border-gray-200" name="state_county_province_region">
                    <option value="CA">Alberta</option>
                 </select>
                 <input class="block w-full outline-none p-2 border border-gray-200 rounded-b-md" type="" placeholder="Postal Code/Zip Code" required name="postal_zip"/>
              </div>

              <div className="my-5">
              <Checkbox /> Business Has No Address
              </div>

            </div>

            <div>
            <InertiaLink href={'/user/business/hours'}>
              <button className="main-bg-c text-white w-full text-center rounded p-2.5">Continue</button>
              </InertiaLink>
            </div>

          </div>

        </div>
      </div>
    </AppLayout>
  );
}