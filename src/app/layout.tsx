import { Metadata } from 'next';
import { Signika } from 'next/font/google';

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
  return (
    <html lang='en'>
      <body className={signika.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
