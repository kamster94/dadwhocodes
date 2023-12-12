import React from 'react';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  datePublished: string;
}

const ArticleMetadata = ({ datePublished }: Props) => {
  return (
    <div className='mb-2 text-gray-500 dark:text-gray-400'>
      <span className='flex'>
        <FontAwesomeIcon
          icon={faCalendar}
          height={17}
          className='mr-2 flex h-full self-center'
        />{' '}
        {new Date(datePublished).toISOString().split('T')[0]}
      </span>
    </div>
  );
};

export default ArticleMetadata;
