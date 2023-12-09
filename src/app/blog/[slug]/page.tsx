import client from '@tina/databaseClient';
import Post from '@/components/Post';

export default async function SinglePost({
  params,
}: {
  params: { slug: string };
}) {
  const { data, query, variables } = await client.queries.post({
    relativePath: params.slug + '.md',
  });

  return (
    <Post
      postQuery={{ data: JSON.parse(JSON.stringify(data)), query, variables }}
    />
  );
}
