import React from 'react';
import OurClients from '../OurClients';

const Footer = () => (
  <footer class="bg-gray-50">
    <div class="max-w-screen-xl px-4 py-16 mx-auto space-y-12 sm:px-6 lg:px-8">


      <div class="justify-items-center grid grid-cols-1 gap-8 pt-6 border-t border-gray-100 sm:grid-cols-2 lg:grid-cols-3">

        <div className='px-10'>
          <p class="text-gray-700">
            Highly scalable
          </p>

          <nav class="flex flex-col mt-4 space-y-2 text-sm">
            <p class="font-medium" href="">Scale from one to thousands of cloud instances in minutes</p>
            <a href="">Button1</a>
          </nav>
        </div>
        <div className='px-10'>
          <p class="text-gray-700">
            Better performance
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm">
            <p class="font-medium" href="">Experience faster IOPS Speed and ultra low latency network</p>
            <a href="">Button1</a>
          </nav>
        </div>
        <div className='pr-10'>
          <p class="text-gray-700">
            Save big
          </p>

          <nav class="flex flex-col mt-4 space-y-2 text-sm">
            <p class="font-medium" href="">Substantial savings compared to other public clouds</p>
            <a href="">Button1</a>
          </nav>
        </div>
      </div>
      <OurClients />
    </div>
  </footer>
);

export default Footer;
