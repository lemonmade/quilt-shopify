import {Link} from '@quilted/quilt';
import {useGraphQLQuery} from '@quilted/swr';
import {graphqlNodesFromConnection} from 'quilt-shopify-storefront';

import startQuery from './StartQuery.graphql';
import styles from './Start.module.css';

export function Start() {
  const {data, error, isLoading} = useGraphQLQuery(startQuery);

  const products = graphqlNodesFromConnection(data?.products);
  const collections = graphqlNodesFromConnection(data?.collections);

  return (
    <>
      {products.length > 0 && (
        <>
          <h2>Products</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <Link to={`/products/${product.handle}`}>{product.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {collections.length > 0 && (
        <>
          <h2>Collections</h2>
          <ul>
            {collections.map((collections) => (
              <li key={collections.id}>
                <Link to={`/collections/${collections.handle}`}>
                  {collections.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      <div className={styles.Start}>Result</div>
      <pre>{JSON.stringify({data, error, isLoading}, null, 2)}</pre>
    </>
  );
}
