import { motion } from 'framer-motion';

type ButtonProps = {
  label: string;
};

export const Button = ({ label }: ButtonProps) => {
  return (
    <motion.button
      className='rounded-xl bg-[#000] px-10 py-2.5 md:px-16'
      whileTap={{ scale: 0.5 }}
    >
      <span className='font-[600] text-white'>{label}</span>
    </motion.button>
  );
};
