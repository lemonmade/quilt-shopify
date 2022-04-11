import {useMemo} from 'react';

import {GraphQLContext} from '@quilted/quilt';
import type {PropsWithChildren} from '@quilted/quilt';

import {createStorefrontGraphQL} from './client';
import type {Options} from './client';
import {StorefrontGraphQLContext} from './context';

export function StorefrontGraphQLApi({
  children,
  shop,
  accessToken,
  apiVersion = '2022-01',
}: PropsWithChildren<Options>) {
  const graphql = useMemo(() => {
    return createStorefrontGraphQL({shop, accessToken, apiVersion});
  }, [shop, accessToken, apiVersion]);

  return (
    <StorefrontGraphQLContext.Provider value={graphql}>
      <GraphQLContext.Provider value={graphql}>
        {children}
      </GraphQLContext.Provider>
    </StorefrontGraphQLContext.Provider>
  );
}
