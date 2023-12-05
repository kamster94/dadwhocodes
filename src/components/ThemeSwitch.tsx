'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`absolute right-0 top-0 m-8 w-fit p-2 duration-500 hover:scale-110 hover:cursor-pointer hover:text-accent active:scale-100`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <MoonIcon width={32} height={32} />
      ) : (
        <SunIcon width={32} height={32} />
      )}
    </button>
  );
};

export default ThemeSwitch;
