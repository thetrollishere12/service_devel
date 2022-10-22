import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import ScreenerStage from '@/CustomComponents/ScreenerStage';

import { InertiaLink, useForm } from '@inertiajs/inertia-react';

import PrimaryButton from '@/Components/PrimaryButton';

import useRoute from '@/Hooks/useRoute';

import classNames from 'classnames';



export default function Dashboard() {

  const route = useRoute();
  const form = useForm({
    name: '',
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    form.post('/user/business/type', {
      onFinish: () => form.reset('name'),
    });
  }

  return (
    <AppLayout>

      <ScreenerStage />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

          <h1 className="font-bold text-3xl text-center mb-6">What's your business name?</h1>

          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-20">

            <div className="text-sm">
              
              <div>Business Name</div>
              <form onSubmit={onSubmit}>
                <div>
                  <input value={form.data.name} onChange={e => form.setData('name', e.currentTarget.value)} required minlength="5" maxlength="100" className="border rounded my-2 py-2 px-3 w-full" placeholder={'Enter your business name'}/>
                </div>

                <div>

                  <PrimaryButton
                    className={classNames('main-bg-c text-white w-full text-center rounded', { 'opacity-25': form.processing })}
                    disabled={form.processing}
                  >Continue</PrimaryButton>

                </div>
                </form>
            </div>

          </div>
        </div>
      </div>
    </AppLayout>
  );
}