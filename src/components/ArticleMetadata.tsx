import React from 'react';
import { CalendarIcon } from '@heroicons/react/20/solid';

interface Props {
  datePublished: string;
}

const ArticleMetadata = ({ datePublished }: Props) => {
  return (
    <div className='my-2 text-gray-500 dark:text-gray-400'>
      <span className='flex'>
        <CalendarIcon width={24} height={24} className='mr-2' /> {datePublished}
      </span>
    </div>
  );
};

export default ArticleMetadata;
