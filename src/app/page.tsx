import client from '@tina/client';
import PostsList from '@/components/PostsList';

export default async function Home() {
  const { data, query, variables } = await client.queries.postConnection({
    filter: { draft: { eq: false } },
  });

  return <PostsList postConnectionQuery={{ data, query, variables }} />;
}
