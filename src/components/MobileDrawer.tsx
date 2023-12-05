import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Navigation from '@/components/Navigation';
import Drawer from 'react-modern-drawer';
import classnames from 'classnames';

interface Props {
  className?: string;
}

const MobileDrawer = ({ className }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={className}>
      <button
        onClick={toggleDrawer}
        className={classnames(
          'absolute left-0 top-0 m-6 inline-block rounded-lg bg-white p-2 transition-all duration-500 hover:cursor-pointer hover:text-accent',
          isOpen ? 'left-64 z-[101] rotate-180' : ''
        )}
      >
        {isOpen ? (
          <XMarkIcon width={32} height={32} />
        ) : (
          <Bars3Icon width={32} height={32} />
        )}
      </button>
      <Drawer
        customIdSuffix='mobileDrawer'
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className=''
      >
        <Navigation className='flex flex-col space-x-0 space-y-4 px-6 py-4' />
      </Drawer>
    </div>
  );
};

export default MobileDrawer;
