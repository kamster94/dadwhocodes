import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
      <span className='ml-auto flex flex-row gap-8'>
        <a
          href='https://github.com/kamster94'
          target='_blank'
          className='noaccent text-black hover:text-accent dark:text-gray-200 dark:hover:text-accent'
        >
          <FontAwesomeIcon icon={faGithub} size='lg' className='' />
        </a>
        <a
          href='https://www.linkedin.com/in/kamil-chmielewski-597b93146'
          target='_blank'
          className='noaccent text-black hover:text-accent dark:text-gray-200 dark:hover:text-accent'
        >
          <FontAwesomeIcon icon={faLinkedin} size='lg' className='' />
        </a>
      </span>
    </nav>
  );
};

export default Navigation;
