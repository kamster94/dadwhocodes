import React, { ReactNode } from 'react';
import classnames from 'classnames';

interface Props {
  children: ReactNode;
  className?: string;
}

const ArticleBody = ({ children, className }: Props) => {
  return (
    <div className={classnames('article mb-8 mt-4', className)}>{children}</div>
  );
};

export default ArticleBody;
