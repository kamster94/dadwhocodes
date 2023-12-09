import client from '@tina/databaseClient';
import Page from '@/components/Page';

export default async function SinglePage({
  params,
}: {
  params: { slug: string };
}) {
  const { data, query, variables } = await client.queries.page({
    relativePath: params.slug + '.md',
  });

  return (
    <Page
      pageQuery={{ data: JSON.parse(JSON.stringify(data)), query, variables }}
    />
  );
}
