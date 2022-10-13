import { useForm } from '@inertiajs/inertia-react';

import React, { useRef, useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';

import useRoute from '@/Hooks/useRoute';
import DangerButton from '@/Components/DangerButton';
import DialogModal from '@/Components/DialogModal';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import SecondaryButton from '@/Components/SecondaryButton';
import classNames from 'classnames';

import BusinessLeftNav from '@/CustomComponents/BusinessLeftNav';

export default function Dashboard() {

  const route = useRoute();

  const [addingCategory, setConfirmingUserDeletion] = useState(false);

  const form = useForm({
    password: '',
  });

  const passwordRef = useRef<HTMLInputElement>(null);

  function addCategory() {
    setConfirmingUserDeletion(true);

    setTimeout(() => passwordRef.current?.focus(), 250);
  }

  function saveCategory() {
    // form.delete(route('current-user.destroy'), {
    //   preserveScroll: true,
    //   onSuccess: () => closeModal(),
    //   onError: () => passwordRef.current?.focus(),
    //   onFinish: () => form.reset(),
    // });
  }

  function closeModal() {
    setConfirmingUserDeletion(false);
    form.reset();
  }

  return (
    <AppLayout>
      <BusinessLeftNav />

      {/*Add Categoory*/}
      
       <DialogModal isOpen={addingCategory} onClose={closeModal}>
         <DialogModal.Content title={'New Category'}>

           <div className="mt-4">
              <div className="py-2">Category Name</div>
             <TextInput
               type="password"
               className="mt-1 block w-3/4"
               placeholder="Password"
               value={form.data.password}
               onChange={e => form.setData('password', e.currentTarget.value)}
             />

             <InputError message={form.errors.password} className="mt-2" />
           </div>

           <div className="mt-4">
              <div className="py-2">Appointment Color</div>
             <TextInput
               type="password"
               className="mt-1 block w-3/4"
               placeholder="Password"
               value={form.data.password}
               onChange={e => form.setData('password', e.currentTarget.value)}
             />

             <InputError message={form.errors.password} className="mt-2" />
           </div>

           <div className="mt-4">
              <div className="py-2">Category Description</div>
             <TextInput
               type="password"
               className="mt-1 block w-3/4"
               placeholder="Password"
               value={form.data.password}
               onChange={e => form.setData('password', e.currentTarget.value)}
             />

             <InputError message={form.errors.password} className="mt-2" />
           </div>

         </DialogModal.Content>
         <DialogModal.Footer>
           <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

           <DangerButton
             onClick={saveCategory}
             className={classNames('ml-2', { 'opacity-25': form.processing })}
             disabled={form.processing}
           >Save</DangerButton>
         </DialogModal.Footer>
       </DialogModal>

      <div>
        <div className="mx-auto">

          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-20">

            <div className="main-bg-c rounded text-white cursor-pointer p-2" onClick={addCategory}>Add Category</div>

            <div>
              
              <div>
                <div class="flex justify-between items-center">
                  <div className="main-t-c p-2"><span className="icon-menu text-gray-300 cursor-pointer ml-2 mr-4"></span>Hair</div>
                  <div><span className="icon-dots-three cursor-pointer text-gray-300 mx-4"></span></div>
                </div>
                
                <div className="text-sm">
                  <div className="border rounded-t p-2 border-b-0 grid grid-cols-4">
                    <div className="flex gap-2 items-center"><span className="icon-menu cursor-pointer text-gray-300 mx-2"></span>Cut<div className="rounded-full bg-green-500 w-3 h-3"></div></div>
                    <div className="text-right">30min</div>
                    <div className="text-right">$10</div>
                    <div className="flex items-center justify-end"><span className="icon-dots-three cursor-pointer text-gray-300 mx-2"></span></div>
                  </div>
                  <div className="border rounded-b p-2 grid grid-cols-4">
                    <div className="flex gap-2 items-center"><span className="icon-menu cursor-pointer px-2 text-gray-300"></span>Trim<div className="rounded-full bg-teal-300 w-3 h-3"></div></div>
                    <div className="text-right">30min</div>
                    <div className="text-right">$10</div>
                    <div className="flex items-center justify-end"><span className="icon-dots-three cursor-pointer text-gray-300 mx-2"></span></div>
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