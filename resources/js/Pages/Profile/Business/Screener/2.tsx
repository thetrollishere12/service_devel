import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import ScreenerStage from '@/CustomComponents/ScreenerStage';

import { InertiaLink, useForm } from '@inertiajs/inertia-react';

import PrimaryButton from '@/Components/PrimaryButton';
import useRoute from '@/Hooks/useRoute';
import classNames from 'classnames';

export default function Dashboard() {

  function type() {
    alert(3);
  }

  const route = useRoute();
  const form = useForm({
    type: '',
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post('/user/business/location', {
      onFinish: () => form.reset('type'),
    });
  }

  return (

    <AppLayout>

      <ScreenerStage />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

          <h1 className="font-bold text-3xl text-center mb-6">Choose your main business type</h1>

          <form onSubmit={onSubmit}>
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-20">

            <div className="my-2 grid grid-cols-4 gap-5">
              
              <div onClick={type} className="border-2 border-current px-3 pb-3 rounded text-center cursor-pointer">
                <div className="text-right pt-2">
                  <input value={form.data.type} onChange={e => form.setData('type','Barbers')} name="type" type="radio" required />
                </div>
                <div className="icon-appleinc text-6xl py-3"></div>
                <div>Barber</div>
              </div>

              <div onClick={type} className="border-2 border-current px-3 pb-3 rounded text-center cursor-pointer">
                <div className="text-right pt-2">
                  <input value={form.data.type} onChange={e => form.setData('type','Barbers')} name="type" type="radio" required />
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