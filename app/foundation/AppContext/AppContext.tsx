import {useMemo} from 'react';
import type {PropsWithChildren} from '@quilted/quilt';
import {useGraphQLQuery} from '@quilted/swr';

import {ShopContext} from '~/shared/shop';
import type {Shop} from '~/shared/shop';

import appContextQuery from './AppContextQuery.graphql';

export function AppContext({children}: PropsWithChildren) {
  const {data} = useGraphQLQuery(appContextQuery);

  const {name} = data?.shop ?? {};

  const shop = useMemo<Shop | null>(() => {
    return name ? {name} : null;
  }, [name]);

  return <ShopContext.Provider value={shop}>{children}</ShopContext.Provider>;
}
