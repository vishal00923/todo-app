'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

export const Card = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='flex flex-col space-y-6 rounded-md bg-[#fff9de] px-3 py-5 shadow-md'>
      <div className='flex flex-col space-y-3'>
        <div className='flex justify-between'>
          <h2 className='text-[22px] font-[500]'>The first task title</h2>
          <div>
            <motion.button
              whileTap={{ scale: 0.5 }}
              onClick={() => setIsOpen(true)}
            >
              <EllipsisHorizontalIcon className='h-7 w-7' color='#000' />
            </motion.button>

            {isOpen && (
              <>
                <div
                  onClick={() => setIsOpen(false)}
                  className='fixed inset-0 h-full w-full'
                />
                <div className='relative z-10'>
                  <ul className='absolute -top-3 right-0 flex w-[180px] flex-col rounded-md bg-white shadow-lg'>
                    <li
                      onClick={() => setIsOpen(false)}
                      className='cursor-pointer px-5 py-3 hover:bg-slate-300'
                    >
                      Edit...
                    </li>
                    <li
                      onClick={() => setIsOpen(false)}
                      className='cursor-pointer px-5 py-3 hover:bg-slate-300'
                    >
                      Delete
                    </li>
                  </ul>
                </div>
              </>
            )}
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
