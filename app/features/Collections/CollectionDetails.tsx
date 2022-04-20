import {NotFound} from '@quilted/quilt/http';
import {useGraphQLQuery} from '@quilted/swr';
import {ShopTitle} from '~/shared/title';

import collectionDetailsQuery from './CollectionDetailsQuery.graphql';

export interface Props {
  handle: string;
}

export function CollectionDetails({handle}: Props) {
  const queryResult = useGraphQLQuery(collectionDetailsQuery, {
    variables: {handle},
  });

  const {data} = queryResult;
  const collection = data?.collection;

  if (data != null && collection == null) {
    return (
      <>
        <div>
          Could not find collection with handle <strong>{handle}</strong>
        </div>
        <NotFound />
      </>
    );
  }

  if (collection == null) {
    return (
      <>
        <div>Collection {handle}!</div>
        <pre>{JSON.stringify(queryResult, null, 2)}</pre>
      </>
    );
  }

  return (
    <>
      <ShopTitle>{collection.title}</ShopTitle>
      <div>Collection {handle}!</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
