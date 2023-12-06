import React, { ReactNode } from 'react';
import classnames from 'classnames';

interface Props {
  children: ReactNode;
  className?: string;
}

const ArticleTitle = ({ children, className }: Props) => {
  return (
    <h2 className={classnames('text-2xl font-bold', className)}>{children}</h2>
  );
};

export default ArticleTitle;
