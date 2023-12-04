'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeaderTitle = () => {
  return (
    <div className='flex flex-col p-4'>
      <h1 className='text-4xl'>Dad Who Codes</h1>
      <h4 className='text-xl'>
        <TypeAnimation
          sequence={[
            'Blog about code',
            2000,
            'Blog about parenting',
            2000,
            'Blog about other stuff',
            2000,
          ]}
          wrapper='span'
          speed={50}
          repeat={Infinity}
        />
      </h4>
    </div>
  );
};

export default HeaderTitle;
