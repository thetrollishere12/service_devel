import { InertiaLink } from '@inertiajs/inertia-react';
import React,{ useEffect } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Head } from '@inertiajs/inertia-react';

import AppLayout from '@/Layouts/AppLayout';
import Footer from '@/CustomComponents/Footer';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Welcome({canLogin,canRegister,laravelVersion,phpVersion,}: Props) {

  return (  
    <AppLayout
      title="Dashboard"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">Main Page</h2>
      )}
    >

    <script type="text/javascript" src={"https://cdn.jsdelivr.net/npm/@splidejs/splide@3.6.12/dist/js/splide.min.js"} />
    <link rel="stylesheet" type="text/css" href={'https://cdn.jsdelivr.net/npm/@splidejs/splide@3.6.12/dist/css/splide.min.css'} />

    <div>
      
      <div>

        <div className="main-bg-c grid grid-cols-2 items-center justify-items-center">

          <h1 className="text-white font-bold text-5xl">Discover and book beaty &<br/>wellness professional near you</h1>
          <div className="p-20">
              <img className="border border-white p-3" style={{"border-top-left-radius": "12rem"}} src={'https://www.espariga.lv/media/images/Romantic.2e16d0ba.fill-800x600.jpg'} />
          </div>

        </div>


        <div className="text-center font-bold text-5xl p-20">Top Category</div>

        <div className="max-w-7xl mx-auto">
        <Splide options={ {
            type   : 'loop',
            perPage: 5,
            perMove:1,
            focus:'center',
            breakpoint:{1500:{perPage:4},1200:{perPage:3},1e3:{perPage:2},700:{perPage:1}},
            updateOnMove:!0,
            gap:'20px'
          } }>
          <SplideSlide className="border bg-white text-center rounded">
            <div className="px-14 pt-10">
            <img className="rounded-full object-cover" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/481px-Cat03.jpg'} />
            </div>
            <div className="py-5">Barber</div>
          </SplideSlide>
          <SplideSlide className="border bg-white text-center rounded">
            <div className="px-14 pt-10">
            <img className="rounded-full object-cover" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/481px-Cat03.jpg'} />
            </div>
            <div className="py-5">Barber</div>
          </SplideSlide>
          <SplideSlide className="border bg-white text-center rounded">
            <div className="px-14 pt-10">
            <img className="rounded-full object-cover" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/481px-Cat03.jpg'} />
            </div>
            <div className="py-5">Barber</div>
          </SplideSlide>
          <SplideSlide className="border bg-white text-center rounded">
            <div className="px-14 pt-10">
            <img className="rounded-full object-cover" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/481px-Cat03.jpg'} />
            </div>
            <div className="py-5">Barber</div>
          </SplideSlide>
          <SplideSlide className="border bg-white text-center rounded">
            <div className="px-14 pt-10">
            <img className="rounded-full object-cover" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/481px-Cat03.jpg'} />
            </div>
            <div className="py-5">Barber</div>
          </SplideSlide>
          <SplideSlide className="border bg-white text-center rounded">
            <div className="px-14 pt-10">
            <img className="rounded-full object-cover" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/481px-Cat03.jpg'} />
            </div>
            <div className="py-5">Barber</div>
          </SplideSlide>
        </Splide>
        </div>

        <div className="text-center font-bold text-5xl p-20">Book with the best, near you</div>

        <div className="dashboard-inner-container-regular max-w-7xl mx-auto px-5 lg:px-7 grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="dashboard-container-inside shadow-md w-full rounded">
                <h2 className="pt-6 pb-2 font-bold text-center text-xl">Edit, Save, Share & Sell</h2>
                <p className="text-center text-sm">Convert & edit your media into any way or format. Save onto the cloud and sell into our marketplace.</p>
                <img className="m-auto w-60 py-10" src=""/>
            </div>

            <div className="dashboard-container-inside shadow-md w-full rounded">
                <h2 className="pt-6 pb-2 font-bold text-center text-xl">Get your products turned to 360</h2>
                <p className="text-center text-sm">Convert your product into an interactive 360 for your customers to experience.</p>
                <img className="m-auto w-60 py-10" src=""/>
            </div>

            <div className="dashboard-container-inside shadow-md w-full rounded">
                <h2 className="pt-6 pb-2 font-bold text-center text-xl">Get your products turned to 360</h2>
                <p className="text-center text-sm">Convert your product into an interactive 360 for your customers to experience.</p>
                <img className="m-auto w-60 py-10" src=""/>
            </div>

        </div>


        <div className="secondary-bg-c text-white my-8">
          
          <div className="max-w-7xl mx-auto text-center py-14">

            <div className="font-bold pb-14 text-2xl">The top-rated destination for<br/>beaty and wellness</div>

            <div className="grid grid-cols-4">
              <div>
                <div className="font-bold pb-2 text-3xl">20,000+</div>
                <div className="text-xl">partner business</div>
              </div>
              <div>
                <div className="font-bold pb-2 text-3xl">20,000+</div>
                <div className="text-xl">partner user</div>
              </div>
              <div>
                <div className="font-bold pb-2 text-3xl">200 million+</div>
                <div className="text-xl">appointment booked</div>
              </div>
              <div>
                <div className="font-bold pb-2 text-3xl">96+ countries</div>
                <div className="text-xl">with company available</div>
              </div>
            </div>

          </div>

        </div>


        <div className="grid grid-cols-2 max-w-7xl mx-auto">
          
          <div>
            
            <div className="font-bold text-justify text-2xl pb-4">Book with the best, near you</div>
            <div className="text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</div>

          </div>

        </div>



        <div className="text-center font-bold text-5xl p-20">Recommanded For You</div>

        <div className="dashboard-inner-container-regular max-w-7xl mx-auto px-5 lg:px-7 grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="dashboard-container-inside shadow-md w-full rounded">
                <h2 className="pt-6 pb-2 font-bold text-center text-xl">Edit, Save, Share & Sell</h2>
                <p className="text-center text-sm">Convert & edit your media into any way or format. Save onto the cloud and sell into our marketplace.</p>
                <img className="m-auto w-60 py-10" src=""/>
            </div>

            <div className="dashboard-container-inside shadow-md w-full rounded">
                <h2 className="pt-6 pb-2 font-bold text-center text-xl">Get your products turned to 360</h2>
                <p className="text-center text-sm">Convert your product into an interactive 360 for your customers to experience.</p>
                <img className="m-auto w-60 py-10" src=""/>
            </div>

            <div className="dashboard-container-inside shadow-md w-full rounded">
                <h2 className="pt-6 pb-2 font-bold text-center text-xl">Get your products turned to 360</h2>
                <p className="text-center text-sm">Convert your product into an interactive 360 for your customers to experience.</p>
                <img className="m-auto w-60 py-10" src=""/>
            </div>

        </div>



      </div>
    </div>

    </AppLayout>
  );
}
