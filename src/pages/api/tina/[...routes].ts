/* eslint-disable */
// @ts-nocheck
import { TinaNodeBackend, LocalBackendAuthProvider } from '@tinacms/datalayer';

import { TinaAuthJSOptions, AuthJsBackendAuthProvider } from 'tinacms-authjs';

import databaseClient from '@tina/databaseClient';

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === 'true';

const handler = TinaNodeBackend({
  authProvider: isLocal
    ? LocalBackendAuthProvider()
    : AuthJsBackendAuthProvider({
        authOptions: TinaAuthJSOptions({
          databaseClient: databaseClient,
          secret: process.env.NEXTAUTH_SECRET!,
        }),
      }),
  databaseClient,
});

export default (req: any, res: any) => {
  return handler(req, res);
};
