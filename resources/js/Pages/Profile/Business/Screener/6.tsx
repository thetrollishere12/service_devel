import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import ScreenerStage from '@/CustomComponents/ScreenerStage';
import CreateServiceModal from "@/Components/CreateServiceModal";
import useServices from "@/Hooks/useServices";

export default function Dashboard() {


    const {data:services,isLoading,isError}=useServices()

  return (
    <AppLayout title={''}>

      <ScreenerStage />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

          <h1 className="font-bold text-3xl text-center mb-6">Start adding services</h1>

          <div className="flex items-center justify-center">


              <div className="w-[700px] bg-white p-5">
                  <table className="w-full">
                      <thead>
                          <tr>
                              <th className='text-sm py-2 font-medium border-b border-gray-100 text-left'>Service Name</th>
                              <th className='text-sm py-2 font-medium border-b border-gray-100 text-left'>Service Duration</th>
                              <th className='text-sm py-2 font-medium border-b border-gray-100 text-left'>Price</th>
                              <th className='text-sm py-2 font-medium border-b border-gray-100 text-left'></th>
                          </tr>
                      </thead>
                      <tbody>
                      {
                          services && services.map((s,i)=>(
                              <tr key={i}>
                                  <td className='text-sm py-2 text-left font-light'>{s.name}</td>
                                  <td className='text-sm py-2 text-left font-light'>{s.minutes}min</td>
                                  <td className='text-sm py-2 text-left font-light'>${s.price}</td>
                                  <td className='text-sm py-2 text-left font-light'>
                                      <button className="w-10 h-10 rounded text-xs text-red-500 flex items-center justify-center border border-gray-100">
                                          x
                                      </button>
                                  </td>
                              </tr>
                          ))
                      }
                      </tbody>
                  </table>

                  <div className="mt-10">

                      <CreateServiceModal/>
                  </div>
                  <div className="mt-10">
                      <button className="w-full h-12 rounded bg-indigo-900 text-white text-xs">
                            Continue
                      </button>
                  </div>
              </div>


          </div>

        </div>
      </div>
    </AppLayout>
  );
}
