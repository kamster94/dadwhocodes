import client from '@tina/databaseClient';
import PostsList from '@/components/PostsList';

export default async function Home() {
  const { data, query, variables } = await client.queries.postConnection({
    filter: { draft: { eq: false } },
  });

  return (
    <PostsList
      postConnectionQuery={{
        data: JSON.parse(JSON.stringify(data)),
        query,
        variables,
      }}
    />
  );
}
