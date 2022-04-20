import {useTitle} from '@quilted/quilt/html';

import {useShop} from './shop';

export function useShopTitle(title: string) {
  const shop = useShop({required: false});

  useTitle(`${shop?.name ?? 'Shop'} ~ ${title}`);
}

export function ShopTitle({children}: {children: string}) {
  useShopTitle(children);
  return null;
}
