import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Navigation from '@/components/Navigation';

interface Props {
  className?: string;
}

const Drawer = ({ className }: Props) => {
  return (
    <div className={className}>
      <input
        type='checkbox'
        id='drawer-toggle'
        className='peer sr-only relative'
      />
      <label
        htmlFor='drawer-toggle'
        className='absolute left-0 top-0 m-6 inline-block rounded-lg bg-white p-2 transition-all duration-500 hover:cursor-pointer hover:text-accent peer-checked:left-64 peer-checked:rotate-180'
      >
        <Bars3Icon width={32} height={32} />
      </label>
      <div className='fixed left-0 top-0 z-20 h-full w-64 -translate-x-full transform bg-white shadow-lg transition-all duration-500 peer-checked:translate-x-0'>
        <div className='px-6 py-4'>
          <Navigation className='flex flex-col space-x-0 space-y-4' />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
