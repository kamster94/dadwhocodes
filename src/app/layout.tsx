import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.scss';
import React, { ReactNode } from 'react';
import Header from '@/components/Header';
import classnames from 'classnames';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import MobileDrawer from '@/components/MobileDrawer';
import ThemeSwitch from '@/components/ThemeSwitch';
import client from '@tina/databaseClient';

const font = Lato({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Dad Who Codes',
  description: 'Blog about coding & parenting & other stuff',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pageResponse = (
    await client.queries.pageConnection({
      filter: { draft: { eq: false } },
    })
  ).data.pageConnection.edges;
  const pages = pageResponse?.map((page) => ({
    route: removeExtensionFromFilename(page?.node?._sys.filename),
    label: page?.node?.title,
  }));

  function removeExtensionFromFilename(filename?: string) {
    if (!filename) {
      return undefined;
    }
    const dotIndex = filename.lastIndexOf('.');
    if (dotIndex === -1) {
      return filename;
    }
    return filename.substring(0, dotIndex);
  }

  return (
    <html lang='en'>
      <body
        className={classnames(
          font.className,
          'flex h-screen flex-col justify-between bg-white text-black dark:bg-gray-900 dark:text-gray-200'
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <MobileDrawer className='h-0 md:hidden' pages={pages} />
          <ThemeSwitch />
          <Header pages={pages} />
          <main className='mx-auto mb-auto flex w-full px-8 text-justify'>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
