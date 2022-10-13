import { useForm } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import ActionSection from '@/Components/ActionSection';
import DangerButton from '@/Components/DangerButton';
import DialogModal from '@/Components/DialogModal';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import SecondaryButton from '@/Components/SecondaryButton';

interface Props {
  user: User;
}

export default function SocialMediaLogin({ user }: Props) {

  return (
    <ActionSection
      title={'My Social Login'}
      description={'Log in with your social media accounts.'}
    >
      <div className="max-w-xl text-sm text-gray-600">


           <div className="grid grid-cols-1 gap-4">
              <div className="flex justify-between">
                 <div className="flex items-center">
                    <div className="border rounded inline-block p-2">
                       <img className="w-6" />
                    </div>
                    <div className="px-4">Google</div>
                 </div>

                 
                 <div className="flex items-center px-4">{user.google_id ? ( <span className="text-green-500">Connected</span> ) : ( "Not Connected" )}</div>
              </div>
              <div className="flex justify-between">
                 <div className="flex items-center">
                    <div className="border rounded inline-block p-2">
                       <div className="icon-facebook text-xl p-0.5" style={{"color": "#3b5998"}}></div>
                    </div>
                    <div className="px-4">Facebook</div>
                 </div>
                 <div className="flex items-center px-4">{user.fb_id ? ( <span className="text-green-500">Connected</span> ) : ( "Not Connected" )}</div>
              </div>
           </div>
     

      </div>


    </ActionSection>
  );
}
