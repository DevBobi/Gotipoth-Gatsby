import React from 'react';
import OurClients from '../OurClients';

const Footer = () => (
  <footer class="bg-gray-50">
    <div class="max-w-screen-xl px-4 py-16 mx-auto space-y-12 sm:px-6 lg:px-8">


      <div class="justify-items-center grid grid-cols-1 gap-8 pt-6 border-t border-gray-100 sm:grid-cols-2 lg:grid-cols-3">

        <div className='px-10'>
          <p class="font-medium">
            Highly scalable
          </p>

          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <p class="hover:opacity-75" href="">Scale from one to thousands of cloud instances in minutes</p>
            <a href="">Button1</a>
          </nav>
        </div>
        <div className='px-10'>
          <p class="font-medium">
            Better performance
          </p>
          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <p class="hover:opacity-75" href="">Experience faster IOPS Speed and ultra low latency network</p>
            <a href="">Button1</a>
          </nav>
        </div>
        <div className='px-10'>
          <p class="font-medium">
            Save big
          </p>

          <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <p class="hover:opacity-75" href="">Substantial savings compared to other public clouds</p>
            <a href="">Button1</a>
          </nav>
        </div>

      </div>
      <OurClients />
    </div>
  </footer>
);

export default Footer;
