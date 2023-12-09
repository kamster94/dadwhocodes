'use client';

import React from 'react';
import { PageQuery, PageQueryVariables } from '@tina/types';
import { useTina } from 'tinacms/dist/react';
import ArticleTitle from '@/components/ArticleTitle';
import ArticleBody from '@/components/ArticleBody';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

interface PageQueryProps {
  data: PageQuery;
  query: string;
  variables: PageQueryVariables;
}

interface Props {
  pageQuery: PageQueryProps;
}

const Page = ({ pageQuery }: Props) => {
  const { data } = useTina({
    query: pageQuery.query,
    variables: pageQuery.variables,
    data: pageQuery.data,
  });

  return (
    <div>
      <ArticleTitle>{data.page.title}</ArticleTitle>
      <ArticleBody>
        <TinaMarkdown content={data.page.body} />
      </ArticleBody>
    </div>
  );
};

export default Page;
