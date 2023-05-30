'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

import { Logo } from './Logo';
import { Todo } from './Todo';

export const Nav = () => {
  const [btnClicked, setBtnClicked] = useState<boolean>(false);

  return (
    <>
      {btnClicked ? (
        <Todo setBtnClicked={setBtnClicked} />
      ) : (
        <nav className='w-full'>
          <div className='flex items-center justify-between px-3 py-4 md:p-5'>
            <Logo />
            <motion.button
              onClick={() => setBtnClicked(true)}
              whileTap={{ scale: 1.3, rotate: 90 }}
            >
              <PlusIcon className='h-10 w-10' color='#000' />
            </motion.button>
          </div>
        </nav>
      )}
    </>
  );
};
