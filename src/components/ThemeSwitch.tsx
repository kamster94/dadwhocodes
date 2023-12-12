'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      className={
        'absolute right-0 top-0 m-6 w-fit p-2 duration-500 hover:scale-110 hover:cursor-pointer hover:text-accent' +
        ' active:scale-100'
      }
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? (
        <FontAwesomeIcon size='xl' icon={faMoon} />
      ) : (
        <FontAwesomeIcon size='xl' icon={faSun} />
      )}
    </button>
  );
};

export default ThemeSwitch;
