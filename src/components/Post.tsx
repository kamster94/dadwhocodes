'use client';

import React from 'react';
import { PostQuery, PostQueryVariables } from '@tina/types';
import { useTina } from 'tinacms/dist/react';
import ArticleTitle from '@/components/ArticleTitle';
import ArticleMetadata from '@/components/ArticleMetadata';
import ArticleBody from '@/components/ArticleBody';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

interface PostQueryProps {
  data: PostQuery;
  query: string;
  variables: PostQueryVariables;
}

interface Props {
  postQuery: PostQueryProps;
}

const Post = ({ postQuery }: Props) => {
  const { data } = useTina({
    query: postQuery.query,
    variables: postQuery.variables,
    data: postQuery.data,
  });

  return (
    <div>
      <ArticleTitle>{data.post.title}</ArticleTitle>
      <ArticleMetadata datePublished={data.post.published} />
      <ArticleBody>
        <TinaMarkdown content={data.post.body} />
      </ArticleBody>
    </div>
  );
};

export default Post;
