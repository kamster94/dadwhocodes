import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.scss';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import classnames from 'classnames';
import Footer from '@/components/Footer';

const font = Lato({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Dad Who Codes',
  description: 'Blog about coding & parenting & other stuff',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={classnames(
          font.className,
          'flex h-screen flex-col justify-between'
        )}
      >
        <Header />
        <main className='mx-auto mb-auto flex w-full px-8 text-justify'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
