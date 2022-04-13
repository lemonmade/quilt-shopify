import {PropsWithChildren} from '@quilted/quilt';

import type {Options} from './client';
import {StorefrontGraphQLApi} from './StorefrontGraphQLApi';

export interface Props extends Options {
  country?: string;
}

export function StorefrontContext({
  children,
  country,
  ...graphqlProps
}: PropsWithChildren<Props>) {
  return (
    <StorefrontGraphQLApi {...graphqlProps}>{children}</StorefrontGraphQLApi>
  );
}
