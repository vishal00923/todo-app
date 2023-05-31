'use client';

import { motion } from 'framer-motion';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

export const Card = () => {
  return (
    <div className='flex flex-col space-y-6 rounded-md bg-[#fff9de] px-3 py-5 shadow-md'>
      <div className='flex flex-col space-y-3'>
        <div className='flex justify-between'>
          <h2 className='text-[22px] font-[500]'>The first task title</h2>
          <div className=''>
            <motion.button whileTap={{ scale: 0.5 }}>
              <EllipsisHorizontalIcon className='h-7 w-7' color='#000' />
            </motion.button>
            <div className='relative'>
              <ul className='absolute -top-3 right-0 flex flex-col space-y-5 rounded-lg bg-white px-5 py-3 shadow-lg'>
                <li className='w-full cursor-pointer hover:bg-slate-500'>
                  Edit...
                </li>
                <li className='cursor-pointer hover:bg-slate-500'>Delete</li>
              </ul>
            </div>
          </div>
        </div>
        <p className='text-[#69665c]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quasi
          impedit laborum, tenetur eum inventore vero dignissimos vitae quae
          voluptates!
        </p>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-2.5'>
          <div className='h-6 w-6 rounded-full bg-[#685aff]' />
          <div className='h-6 w-6 rounded-full bg-[#0088ff]' />
          <div className='h-6 w-6 rounded-full bg-[#ff6060]' />
        </div>
        <div className='flex items-center space-x-2'>
          <span className='text-[#989790]'>done</span>
          <input className='h-4 w-4' type='checkbox' />
        </div>
      </div>
    </div>
  );
};
