import {NotFound} from '@quilted/quilt/http';
import {useGraphQLQuery} from '@quilted/react-query';

import collectionDetailsQuery from './CollectionDetailsQuery.graphql';

export interface Props {
  handle: string;
}

export function CollectionDetails({handle}: Props) {
  const {isSuccess, data} = useGraphQLQuery(collectionDetailsQuery, {
    variables: {handle},
  });

  if (isSuccess && data?.collection == null) {
    return (
      <>
        <div>
          Could not find collection with handle <strong>{handle}</strong>
        </div>
        <NotFound />
      </>
    );
  }

  return (
    <>
      <div>Collection {handle}!</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}