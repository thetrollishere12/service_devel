import { useForm } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import ActionSection from '@/Components/ActionSection';
import DangerButton from '@/Components/DangerButton';
import DialogModal from '@/Components/DialogModal';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import SecondaryButton from '@/Components/SecondaryButton';

interface Props {
  user: User;
}

export default function PaymentMethod({ user }: Props) {

const route = useRoute();

const [addingPaymentMethod, setConfirmingUserDeletion] = useState(false);

  const form = useForm({
    password: '',
  });

  const passwordRef = useRef<HTMLInputElement>(null);

  function addPaymentMethod() {
    setConfirmingUserDeletion(true);

    setTimeout(() => passwordRef.current?.focus(), 250);
  }

  function saveMethod() {
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
    <ActionSection
      title={'Payment Method'}
      description={'Add and manage your methods of payment'}
    >
      <div className="max-w-xl text-sm text-gray-600">


           <div className="grid grid-cols-1 gap-4">
 

              <div className="secondary-t-c cursor-pointer" onClick={addPaymentMethod}>Add payment method</div>

              {/*Add Account*/}

               <DialogModal isOpen={addingPaymentMethod} onClose={closeModal}>
                 <DialogModal.Content title={'Add Payment Method'}>

                   <div className="mt-4">
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
                     onClick={saveMethod}
                     className={classNames('ml-2', { 'opacity-25': form.processing })}
                     disabled={form.processing}
                   >Add Method</DangerButton>
                 </DialogModal.Footer>
               </DialogModal>

           </div>
     

      </div>


    </ActionSection>
  );
}
