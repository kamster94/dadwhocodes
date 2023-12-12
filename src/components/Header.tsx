'use client';

import React from 'react';
import { JetBrains_Mono } from 'next/font/google';
import classnames from 'classnames';
import Image from 'next/image';
import logo from '../../public/logo.png';
import HeaderTitle from '@/components/HeaderTitle';
import Navigation, { PageLinkProps } from '@/components/Navigation';
import 'react-modern-drawer/dist/index.css';
import Link from 'next/link';

const font = JetBrains_Mono({ subsets: ['latin'] });

interface Props {
  pages?: PageLinkProps[];
}

const Header = ({ pages }: Props) => {
  return (
    <header className={classnames(font.className, 'flex flex-col p-8')}>
      <div className='flex flex-col items-center md:flex-row md:items-start'>
        <div className='flex'>
          <Link href='/' className='noaccent'>
            <Image src={logo} alt='Logo' height={100} width={100} />
          </Link>
        </div>
        <HeaderTitle />
      </div>
      <Navigation className='hidden gap-8 md:mt-4 md:flex' pages={pages} />
    </header>
  );
};

export default Header;
