import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import ScreenerStage from '@/CustomComponents/ScreenerStage';
import Checkbox from '@/Components/Checkbox';

import { InertiaLink, useForm } from '@inertiajs/inertia-react';

import PrimaryButton from '@/Components/PrimaryButton';
import useRoute from '@/Hooks/useRoute';
import classNames from 'classnames';

export default function Dashboard() {

  const [checked, setChecked] = React.useState(false);

  const handleChange = (e) => {
    setChecked(!checked);
    form.setData('checkbox', e.currentTarget.checked)
  };

  const route = useRoute();
  const form = useForm({
    country:'CA',
    line1:'',
    line2:'',
    city:'',
    postal_zip:'',
    state_county_province_region:'Alberta',
    checkbox:false,
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post('/user/business/hours', {
      onFinish: () => form.reset('type'),
    });
  }

  return (
    <AppLayout>

      
      <ScreenerStage />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

          <h1 className="font-bold text-3xl text-center mb-6">Set your location</h1>
          <form onSubmit={onSubmit}>
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-20">

            <div className="">
              
              <div className="font-bold mb-6">Business location</div>

              <div>Where's your business located?</div>
              
{/*              <div>
                <input className="border rounded my-2 py-2 px-3 w-full" placeholder={'Enter your business address'}/>
              </div>*/}

              <div class="customer_address_container">
                 <select value={form.data.country} onChange={e => form.setData('country', e.currentTarget.value)} class="block w-full outline-none p-2 border-x border-b-0 border-gray-200 rounded-t-md" required>
                    <option value="CA">Canada</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                 </select>
                 <input value={form.data.line1} onChange={e => form.setData('line1', e.currentTarget.value)} class="block w-full outline-none p-2 border-x border-t border-b-0 border-gray-200" placeholder="Address Line 1" required />
                 <input value={form.data.line2} onChange={e => form.setData('line2', e.currentTarget.value)} class="block w-full outline-none p-2 border-x border-t border-b-0 border-gray-200" placeholder="Address Line 2" />
                 <input value={form.data.city} onChange={e => form.setData('city', e.currentTarget.value)} class="block w-full outline-none p-2 border-x border-t border-b-0 border-gray-200" placeholder="City" required/>
                 <select value={form.data.state_county_province_region} onChange={e => form.setData('state_county_province_region', e.currentTarget.value)} class="block w-full outline-none p-2 border-x border-b-0 border-gray-200" required>
                    <option value="Alberta">Alberta</option>
                 </select>
                 <input value={form.data.postal_zip} onChange={e => form.setData('postal_zip', e.currentTarget.value)} class="block w-full outline-none p-2 border border-gray-200 rounded-b-md" type="" placeholder="Postal Code/Zip Code" required/>
              </div>

              <div className="my-5">
              <Checkbox checked={checked} onChange={handleChange} /> Business Has No Address
              </div>
              
            </div>

            <div>
            <PrimaryButton
                    className={classNames('main-bg-c text-white w-full text-center rounded', { 'opacity-25': form.processing })}
                    disabled={form.processing}
                  >Continue</PrimaryButton>
            </div>
            
          </div>
          </form>
        </div>
      </div>
    </AppLayout>
  );
}