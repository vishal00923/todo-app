'use client';

import { motion } from 'framer-motion';
import { PlusIcon } from '@heroicons/react/24/solid';

import { Logo } from './Logo';

type NavProps = {
  setPlusIconClicked: (value: boolean) => void;
};

export const Nav = ({ setPlusIconClicked }: NavProps) => {
  return (
    <nav className='w-full'>
      <div className='flex items-center justify-between px-3 py-4 md:p-5'>
        <Logo />
        <motion.button
          onClick={() => setPlusIconClicked(true)}
          whileTap={{ scale: 1.3, rotate: 90 }}
        >
          <PlusIcon className='h-10 w-10' color='#000' />
        </motion.button>
      </div>
    </nav>
  );
};
