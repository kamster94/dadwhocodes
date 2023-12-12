'use client';

import React from 'react';
import Navigation, { PageLinkProps } from '@/components/Navigation';
import Drawer from 'react-modern-drawer';
import classnames from 'classnames';
import { JetBrains_Mono } from 'next/font/google';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const font = JetBrains_Mono({ subsets: ['latin'] });

interface Props {
  className?: string;
  pages?: PageLinkProps[];
}

const MobileDrawer = ({ className, pages }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={className}>
      <button
        onClick={toggleDrawer}
        className={classnames(
          'absolute left-0 top-0 m-6 inline-block p-2 transition-all duration-500 hover:scale-110' +
            ' hover:cursor-pointer hover:text-accent active:scale-100',
          isOpen ? 'left-64 z-[101] rounded-lg bg-white dark:bg-gray-900' : ''
        )}
      >
        {isOpen ? (
          <FontAwesomeIcon size='xl' icon={faXmark} />
        ) : (
          <FontAwesomeIcon size='xl' icon={faBars} />
        )}
      </button>
      <Drawer
        customIdSuffix='mobileDrawer'
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        overlayColor=''
        overlayClassName='bg-gray-900 dark:bg-gray-200'
      >
        <div className='h-full bg-white dark:bg-gray-900'>
          <Navigation
            className={classnames(
              font.className,
              'flex flex-col space-x-0 space-y-4 px-6 py-4'
            )}
            pages={pages}
            onLinkClick={toggleDrawer}
          />
        </div>
      </Drawer>
    </div>
  );
};

export default MobileDrawer;
