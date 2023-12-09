'use client';

import React from 'react';
import { useTina } from 'tinacms/dist/react';
import { PostConnectionQuery, PostConnectionQueryVariables } from '@tina/types';
import ArticleTitle from '@/components/ArticleTitle';
import ArticleMetadata from '@/components/ArticleMetadata';
import ArticleBody from '@/components/ArticleBody';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import Link from 'next/link';

interface PostConnectionQueryProps {
  data: PostConnectionQuery;
  query: string;
  variables: PostConnectionQueryVariables;
}

interface Props {
  postConnectionQuery: PostConnectionQueryProps;
}

const PostsList = ({ postConnectionQuery }: Props) => {
  const { data } = useTina({
    query: postConnectionQuery.query,
    variables: postConnectionQuery.variables,
    data: postConnectionQuery.data,
  });
  const postsList = data.postConnection.edges;

  return (
    <div>
      {postsList?.map((post) => (
        <div key={post?.node?.id}>
          <ArticleTitle>
            <Link href={`/blog/${post?.node?._sys.filename}`}>
              {post?.node?.title}
            </Link>
          </ArticleTitle>
          <ArticleMetadata datePublished={post?.node?.published ?? ''} />
          <ArticleBody>
            <TinaMarkdown content={post?.node?.highlights} />
            <div className='mt-2'>
              <Link href={`/blog/${post?.node?._sys.filename}`}>
                Read more...
              </Link>
            </div>
          </ArticleBody>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
