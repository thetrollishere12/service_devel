import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Dashboard() {
  return (

      <div className="fixed h-screen main-bg-c text-white text-2xl flex flex-col gap-2">

        <InertiaLink href={'/business/dashboard'}>
          <div className="icon-home p-5 text-center duration-75 cursor-pointer hover:bg-gray-600"></div>
        </InertiaLink>

        <div className="icon-stats-bars p-5 text-center duration-75 cursor-pointer hover:bg-gray-600"></div>

        <InertiaLink href={'/business/calendar'}>
        <div className="icon-table p-5 text-center duration-75 cursor-pointer hover:bg-gray-600"></div>
        </InertiaLink>

        <div className="icon-profile p-5 text-center duration-75 cursor-pointer hover:bg-gray-600"></div>

        <InertiaLink href={'/business/service'}>
        <div className="icon-list p-5 text-center duration-75 cursor-pointer hover:bg-gray-600"></div>
        </InertiaLink>

        <InertiaLink href={'/business/transaction'}>
        <div className="icon-price-tag p-5 text-center duration-75 cursor-pointer hover:bg-gray-600"></div>
        </InertiaLink>

        <InertiaLink href={'/business/setting'}>
        <div className="icon-settings p-5 text-center duration-75 cursor-pointer hover:bg-gray-600"></div>
        </InertiaLink>

      </div>

  );
}