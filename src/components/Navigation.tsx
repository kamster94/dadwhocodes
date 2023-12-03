import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';

interface Props {
  className?: string;
}

const Navigation = ({ className }: Props) => {
  return (
    <nav className={classnames('mt-4 space-x-8', className)}>
      <Link href='/'>Blog</Link>
      <Link href='/about-me'>About me</Link>
      <Link href='/my-projects'>My projects</Link>
    </nav>
  );
};

export default Navigation;
