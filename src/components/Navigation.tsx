import React from 'react';
import Link from 'next/link';

export interface PageLinkProps {
  route?: string;
  label?: string;
}

interface Props {
  className?: string;
  pages?: PageLinkProps[];
  onLinkClick?: () => void;
}

const Navigation = ({ className, pages, onLinkClick }: Props) => {
  return (
    <nav className={className}>
      <Link href='/' onClick={onLinkClick}>
        Blog
      </Link>
      {pages?.map((page, index) => {
        if (page.route && page.label) {
          return (
            <Link
              key={index}
              href={`/pages/${page.route}`}
              onClick={onLinkClick}
            >
              {page.label}
            </Link>
          );
        }
      })}
    </nav>
  );
};

export default Navigation;
