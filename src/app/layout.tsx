'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Signika } from 'next/font/google';

import { Nav } from '@/components/Nav';
import { Todo } from '@/components/Todo';
import { NodeType } from '@/types';

import './globals.css';

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Todo web app for  to keep a track for all the daily tasks.',
};

const signika = Signika({
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
});

const RootLayout = ({ children }: NodeType) => {
  const [plusIconClicked, setPlusIconClicked] = useState<boolean>(false);

  return (
    <html lang='en'>
      <body className={signika.className}>
        {plusIconClicked ? (
          <Todo setPlusIconClicked={setPlusIconClicked} />
        ) : (
          <>
            <Nav setPlusIconClicked={setPlusIconClicked} />
            {children}
          </>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
