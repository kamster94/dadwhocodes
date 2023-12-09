import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
            required: true,
          },
          {
            type: 'datetime',
            name: 'published',
            label: 'Date Published',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'highlights',
            label: 'Highlights',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
      },
      {
        name: 'page',
        label: 'Pages',
        path: 'content/pages',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/pages/${document._sys.filename}`,
        },
      },
    ],
  },
});
