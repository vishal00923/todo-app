import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';

import { Tag } from './Tag';
import { Button } from './Button';

type TodoProps = {
  setPlusIconClicked: (value: boolean) => void;
};

export const Todo = ({ setPlusIconClicked }: TodoProps) => {
  return (
    <div className='fixed inset-0 h-screen w-full bg-white'>
      <div className='flex items-center justify-between p-4 md:p-5'>
        <motion.button
          onClick={() => setPlusIconClicked(false)}
          whileTap={{ scale: 1.3, rotate: 90 }}
        >
          <XMarkIcon className='h-5 w-5' color='#000' />
        </motion.button>
        <Button label='Add' />
      </div>
      <form className='mt-16'>
        <div className='flex flex-col space-y-8 px-5'>
          <div className='flex flex-col space-y-3'>
            <label className='text-[18px] font-[600]' htmlFor='title'>
              Title
            </label>
            <input
              className='ml-2 rounded-md border-[1px] border-black px-3 py-1.5 focus:outline-none'
              type='text'
              placeholder='add a title...'
            />
          </div>
          <div className='flex flex-col space-y-3'>
            <label className='text-[18px] font-[600]' htmlFor='description'>
              Description
            </label>
            <textarea
              className='ml-2 rounded-md border-[1px] border-black px-3 py-1.5 focus:outline-none'
              name='description'
              id='description'
              cols={30}
              rows={10}
              placeholder='add a description...'
            ></textarea>
          </div>
        </div>

        <div className='mt-16'>
          <div className='flex flex-col space-y-5 px-5'>
            <h2 className='text-xl font-[600]'>Tags</h2>
            <div className='flex flex-col space-y-6 px-3'>
              <Tag label='work' bgColor='bg-[#685aff]' />
              <Tag label='study' bgColor='bg-[#0088ff]' />
              <Tag label='entertainment' bgColor='bg-[#ff6060]' />
              <Tag label='family' bgColor='bg-[#26ff00]' />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
