import React from 'react';
import Link from 'next/link';

interface Props {
  className?: string;
}

const Navigation = ({ className }: Props) => {
  return (
    <nav className={className}>
      <Link href='/'>Blog</Link>
      <Link href='/about-me'>About me</Link>
      <Link href='/my-projects'>My projects</Link>
    </nav>
  );
};

export default Navigation;
