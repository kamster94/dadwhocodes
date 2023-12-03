import React from 'react';
import { JetBrains_Mono } from 'next/font/google';
import classnames from 'classnames';
import Image from 'next/image';
import logo from '../../public/logo.png';
import HeaderTitle from '@/components/HeaderTitle';
import Navigation from '@/components/Navigation';

const font = JetBrains_Mono({ subsets: ['latin'] });

const Header = () => {
  return (
    <header className={classnames(font.className, 'flex flex-col p-8')}>
      <div className='flex flex-row'>
        <Image src={logo} alt='Logo' height={100} width={100} />
        <HeaderTitle />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
