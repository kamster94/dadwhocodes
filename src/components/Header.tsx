import React from 'react';
import { JetBrains_Mono } from 'next/font/google';
import classnames from 'classnames';
import Image from 'next/image';
import logo from '../../public/logo.png';
import HeaderTitle from '@/components/HeaderTitle';
import Navigation from '@/components/Navigation';
import Drawer from '@/components/Drawer';

const font = JetBrains_Mono({ subsets: ['latin'] });

const Header = () => {
  return (
    <header className={classnames(font.className, 'flex flex-col p-8')}>
      <div className='flex flex-col items-center md:flex-row md:items-start'>
        <div className='flex'>
          <Image src={logo} alt='Logo' height={100} width={100} />
        </div>
        <HeaderTitle />
      </div>
      <Navigation className='hidden md:flex' />
      <Drawer className='h-0 md:hidden' />
    </header>
  );
};

export default Header;
