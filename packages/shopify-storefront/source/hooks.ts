import {useContext} from 'react';
import {StorefrontGraphQLContext} from './context';

export function useStorefrontGraphQL() {
  const graphql = useContext(StorefrontGraphQLContext);

  if (graphql == null) {
    throw new Error(
      `Could not find any Storefront GraphQL client. Did you render a <StorefrontGraphQLApi> component?`,
    );
  }

  return graphql;
}
