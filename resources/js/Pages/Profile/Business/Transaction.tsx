import React from 'react';
import AppLayout from '@/Layouts/AppLayout';

import BusinessLeftNav from '@/CustomComponents/BusinessLeftNav';

export default function Dashboard() {
  return (
    <AppLayout>

      <BusinessLeftNav />

      <div>
        <div className="mx-auto">

          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-20">



            <div>
              
              <table className="border-spacing-3 border-collapse w-full text-left">
                <thead className="bg-main-c text-white">
                  <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                </tr>
                <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                  <td>Austria</td>
                </tr>
                <tr>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                  <td>UK</td>
                </tr>
                <tr>
                  <td>Laughing Bacchus Winecellars</td>
                  <td>Yoshi Tannamuri</td>
                  <td>Canada</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                </tr>
                </tbody>
              </table>

            </div>

          </div>
        </div>
      </div>
    </AppLayout>
  );
}