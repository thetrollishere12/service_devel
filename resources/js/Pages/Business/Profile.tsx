import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import ScreenerStage from '@/CustomComponents/ScreenerStage';

export default function Dashboard() {
  return (
    <AppLayout>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 gap-4">
            
            <div>

              <div className="flex justify-between">
                
                <div className="flex gap-3 items-center">
                  <img className="h-10 w-10 my-2 rounded-full object-cover" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/481px-Cat03.jpg'} />
                  
                  <div>
                    <h1 className="font-bold main-t-c">Traditional Spa For Wellness</h1>
                    <div className="text-xs">Sequence Spa Reliance Mall Unit No. RSM 33, 34, 2...</div>
                  </div>

                </div>

                <div><button className="main-bg-c text-white rounded px-5 py-2 text-xs place-self-end">Book Now</button></div>

              </div>
              
            </div>

            <div className="border rounded p-5">
              <h2 className="font-bold main-t-c">Location</h2>
              <div className="text-xs secondary-t-c py-1">See Direction</div>
              <div className="text-xs">Traditional Spa Reliance Mall Unit No. RSM 33, 34, 2nd Floor, opp. Apple Hospital, Surat (Khatodra Wadi, Udhana Darwaja), Gujarat</div>

              <h2 className="font-bold main-t-c py-4">Contact & Business Hours</h2>

              <div className="flex gap-2 text-xs pb-3">
                <div className="icon-phone"></div>
                <div>9896959696</div>
              </div>

              <div className="flex gap-2 text-xs pb-3">
                <div className="icon-clock secondary-t-c"></div>
                <div>Closed Now</div>
              </div>

              <div className="grid grid-cols-3 text-xs pb-3">
                <div className="col-span-1">Monday</div>
                <div className="col-span-2">
                  <div>09:30 AM - 06:30 PM</div>
                  <div>09:30 AM - 06:30 PM</div>
                  <div>09:30 AM - 06:30 PM</div>
                </div>
              </div>

              <div className="grid grid-cols-3 text-xs pb-3">
                <div className="col-span-1">Tuesday</div>
                <div className="col-span-2">
                  <div>09:30 AM - 06:30 PM</div>
                  <div>09:30 AM - 06:30 PM</div>
                  <div>09:30 AM - 06:30 PM</div>
                </div>
              </div>

            </div>

          </div>

          <div className="py-8">
            <h2 className="font-bold main-t-c">About Traditional Spa For Wellness</h2>
            <div className="text-xs">Traditional hometown barbershop with the perfect combination of old school meets new school. We
offer straight razor shaves, haircuts, and beard work. If you want a shop that focuses on quality</div>
          </div>


          <h2 className="font-bold main-t-c">Services</h2>
          <div className="grid grid-cols-6">
            
            <div className="col-span-2">
              
              <div className="text-sm bg-gray-50 rounded py-2 px-3 font-bold">Haircut</div>

            </div>

            <div className="col-span-4 pl-4">
              
                <div className="hover:bg-gray-50 p-2 border-b">
                    
                  <div className="flex justify-between">
                      
                    <div className="flex gap-3 items-center">
                      <img className="h-10 w-10 my-2 rounded-full object-cover" src={'https://media.gq.com/photos/576450aa5db2e8cb18c9e972/3:4/w_1500,h_2000,c_limit/summer-haircut-1x1.jpg'} />
                      
                      <div>
                        <h1 className="font-bold main-t-c text-sm">Haircut</h1>
                        <div className="text-xs">

                          <div className="py-0.5">1 Hour</div>
                          <div className="py-0.5 font-bold secondary-t-c">$200</div>
                        </div>
                      </div>

                    </div>

                    <div><button className="main-bg-c rounded text-white px-4 py-1 text-xs">Book</button></div>

                  </div>

                  <div className="text-xs py-3">All haircuts include a relaxing shampoo, conditioning, and fabulous blow-out including flat or curling iron work if desired.
Super long, thick, hair my have an added charge of up to $20</div>
                </div>

                <div className="hover:bg-gray-50 p-2 border-b">
                    
                  <div className="flex justify-between">
                      
                    <div className="flex gap-3 items-center">
                      <img className="h-10 w-10 my-2 rounded-full object-cover" src={'https://i2.wp.com/therighthairstyles.com/wp-content/uploads/2021/09/1-the-ivy-league-mens-cut.jpg?resize=500%2C592'} />
                      
                      <div>
                        <h1 className="font-bold main-t-c text-sm">Fade</h1>
                        <div className="text-xs">

                          <div className="py-0.5">30 Min</div>

                          <div className="py-0.5 font-bold secondary-t-c">$500</div>

                        </div>
                      </div>

                    </div>

                    <div><button className="main-bg-c rounded text-white px-4 py-1 text-xs">Book</button></div>

                  </div>

                  <div className="text-xs py-3"></div>

                </div>

            </div>

          </div>





          <div className="grid grid-cols-6">
            
            <div className="col-span-2">
              
              <div className="border rounded p-3 mb-4">
                <div className="font-bold main-t-c">42 Reviews </div>

                <div className="text-xs font-bold">Filter by rating</div>

                <div className="grid grid-cols-8 items-center text-xs">
                  <div className="col-span-1">5 <span className="icon-star-full text-yellow-400"></span></div>
                  <div className="col-span-6 pr-2.5">
                    <div className="bg-yellow-400 h-2"></div>
                  </div>
                  <div className="col-span-1">(42)</div>
                </div>

              </div>

              <div className="flex gap-2 border rounded p-3">
                <div className="icon-thumb_up"></div>
                <div>
                  <h3 className="font-bold main-t-c text-sm">Reviews you can trust</h3>
                  <div className="text-xs">All our ratings are from genuine customers, 
following verified visits</div>
                </div>
              </div>

            </div>

            <div className="col-span-4 pl-4">
              
                <div className="my-3">
                    
                  <div className="flex gap-3 items-center">
                    <img className="h-10 w-10 my-2 rounded-full object-cover" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/481px-Cat03.jpg'} />
                    
                    <div>
                      <h1 className="font-bold main-t-c text-sm">jmontalvo</h1>
                      <div className="text-xs">

                        <div className="flex gap-1">
                          <span className="icon-star-full text-yellow-400"></span>
                          <span className="icon-star-full text-yellow-400"></span>
                          <span className="icon-star-full text-yellow-400"></span>
                          <span className="icon-star-full text-yellow-400"></span>
                          <span className="icon-star-full text-yellow-400"></span>
                        </div>

                        <div className="py-0.5">Jun 26, 2022</div>

                      </div>
                    </div>

                  </div>

                  <div className="text-xs py-3">Well done spa family feeling.</div>
                  <hr/>
                </div>

                <div className="my-3">
                    
                  <div className="flex gap-3 items-center">
                    <img className="h-10 w-10 my-2 rounded-full object-cover" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/481px-Cat03.jpg'} />
                    
                    <div>
                      <h1 className="font-bold main-t-c text-sm">jmontalvo</h1>
                      <div className="text-xs">

                        <div className="flex gap-1">
                          <span className="icon-star-full text-yellow-400"></span>
                          <span className="icon-star-full text-yellow-400"></span>
                          <span className="icon-star-full text-yellow-400"></span>
                          <span className="icon-star-full text-yellow-400"></span>
                          <span className="icon-star-full text-yellow-400"></span>
                        </div>

                        <div className="py-0.5">Jun 26, 2022</div>

                      </div>
                    </div>

                  </div>

                  <div className="text-xs py-3">No Comment Left.</div>
                  <hr/>
                </div>

            </div>

          </div>

          <div className="main-t-c bg-gray-50 rounded p-4 my-4">
            
            <h2 className="font-bold pb-4">Venues near Spa For Wellness</h2>

            <div className="grid grid-cols-4 gap-5">
              <div className="text-xs">
                <img className="rounded" src={'https://media.istockphoto.com/photos/spa-beauty-treatment-and-wellness-background-with-massage-pebbles-picture-id1134916892?k=20&m=1134916892&s=612x612&w=0&h=b4FcTF-d68PJ7aQo9jrj4LQ3svcUApdDP944N0ENlBI='} />
                <div className="font-bold py-2">Advik Wellness</div>
                <div>G/2 23-3 Muktanand Nagar, near...</div>
              </div>
              <div className="text-xs">
                <img className="rounded" src={'https://media.istockphoto.com/photos/spa-beauty-treatment-and-wellness-background-with-massage-pebbles-picture-id1134916892?k=20&m=1134916892&s=612x612&w=0&h=b4FcTF-d68PJ7aQo9jrj4LQ3svcUApdDP944N0ENlBI='} />
                <div className="font-bold py-2">Advik Wellness</div>
                <div>G/2 23-3 Muktanand Nagar, near...</div>
              </div>
              <div className="text-xs">
                <img className="rounded" src={'https://media.istockphoto.com/photos/spa-beauty-treatment-and-wellness-background-with-massage-pebbles-picture-id1134916892?k=20&m=1134916892&s=612x612&w=0&h=b4FcTF-d68PJ7aQo9jrj4LQ3svcUApdDP944N0ENlBI='} />
                <div className="font-bold py-2">Advik Wellness</div>
                <div>G/2 23-3 Muktanand Nagar, near...</div>
              </div>
              <div className="text-xs">
                <img className="rounded" src={'https://media.istockphoto.com/photos/spa-beauty-treatment-and-wellness-background-with-massage-pebbles-picture-id1134916892?k=20&m=1134916892&s=612x612&w=0&h=b4FcTF-d68PJ7aQo9jrj4LQ3svcUApdDP944N0ENlBI='} />
                <div className="font-bold py-2">Advik Wellness</div>
                <div>G/2 23-3 Muktanand Nagar, near...</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </AppLayout>
  );
}