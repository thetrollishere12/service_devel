import React from 'react';

export default function ScreenerStage() {
  return (
      <div className="py-8">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-5 relative">

            
          <div className="py-2 relative">

              <div className="max-w-4xl md:block border absolute top-2/4 left-1/2 z-0 -translate-y-2/4  w-full" style={{'border-color':'black !important'}}></div>

                  <div className="m-auto border-2 rounded-full border-black w-10 h-10 grid content-center relative bg-white">
                      <div className="icon-cross text-center text-xs duration-300 main-t-c"></div>
                  </div>

                <div className="text-xs text-center pt-2 absolute left-1/2 -translate-x-2/4">Business Name</div>

          </div>
          <div className="py-2 relative">

              <div className="max-w-4xl md:block border absolute top-2/4 left-1/2 z-0 -translate-y-2/4  w-full" style={{'border-color':'black !important'}}></div>

                  <div className="m-auto border-2 rounded-full border-black w-10 h-10 grid content-center relative bg-white">
                      <div className="icon-cross text-center text-xs duration-300 main-t-c"></div>
                  </div>

                <div className="text-xs text-center pt-2 absolute left-1/2 -translate-x-2/4">Business Type</div>

          </div>
          <div className="py-2 relative">

              <div className="max-w-4xl md:block border absolute top-2/4 left-1/2 z-0 -translate-y-2/4 -translate-x-2/4 w-full" style={{'border-color':'black !important'}}></div>

                  <div className="m-auto border-2 rounded-full border-black w-10 h-10 grid content-center relative relative z-10 bg-white">
                      <div className="icon-cross text-center text-xs duration-300 text-black"></div>
                  </div>
          
                <div className="text-xs text-center pt-2 absolute left-1/2 -translate-x-2/4">Set Up Location</div>
          </div>
          <div className="py-2 relative">

              <div className="max-w-4xl md:block border absolute top-2/4 left-1/2 z-0 -translate-y-2/4 -translate-x-2/4 w-full" style={{'border-color':'black !important'}}></div>

                  <div className="m-auto border-2 rounded-full border-black w-10 h-10 grid content-center relative relative z-10 bg-white">
                      <div className="icon-cross text-center text-xs duration-300 text-black"></div>
                  </div>
          
                <div className="text-xs text-center pt-2 absolute left-1/2 -translate-x-2/4">Working Hours</div>
          </div>
          <div className="py-2 relative">

              <div className="max-w-4xl md:block border absolute top-2/4 -translate-y-2/4 z-0 -translate-x-2/4  w-full" style={{'border-color':'black !important'}}></div>

                  <div className="m-auto border-2 rounded-full border-black w-10 h-10 grid content-center relative bg-white">
                      <div className="icon-cross text-center text-xs duration-300 text-black"></div>
                  </div>
            
                <div className="text-xs text-center pt-2 absolute left-1/2 -translate-x-2/4">Show off your workplace</div>
          </div>


        </div>
      </div>
  );
}
