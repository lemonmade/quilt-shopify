import {NotFound} from '@quilted/quilt/http';
import {useGraphQLQuery} from '@quilted/react-query';
import {ProductSeo, graphqlNodesFromConnection} from 'quilt-shopify-storefront';

import productDetailsQuery from './ProductDetailsQuery.graphql';

export interface Props {
  handle: string;
}

export function ProductDetails({handle}: Props) {
  const queryResult = useGraphQLQuery(productDetailsQuery, {
    variables: {handle},
  });

  const {data, isSuccess} = queryResult;
  const product = data?.product;

  if (isSuccess && data?.product == null) {
    return (
      <>
        <div>
          Could not find product with handle <strong>{handle}</strong>
        </div>
        <NotFound />
      </>
    );
  }

  if (product == null) {
    return (
      <>
        <div>Product {handle}!</div>
        <pre>{JSON.stringify(queryResult, null, 2)}</pre>
      </>
    );
  }

  return (
    <>
      <ProductSeo
        title={product.title}
        description={product.description}
        vendor={product.vendor}
        variants={graphqlNodesFromConnection(product.variants)}
      />
      <div>Product {handle}!</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
