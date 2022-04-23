import {useRoutes} from '@quilted/quilt';

import {Start} from '../features/Start';
import {ProductDetails} from '../features/Products';
import {CollectionDetails} from '../features/Collections';

import {LocaleTester} from '../features/LocaleTester';

export function Routes() {
  return useRoutes([
    {
      match: 'locale',
      render: () => <LocaleTester />,
    },
    {match: '/', render: () => <Start />},
    {
      match: 'products',
      children: [
        {
          match: /[\w-]+/,
          render: ({matched}) => <ProductDetails handle={matched} />,
        },
      ],
    },
    {
      match: 'collections',
      children: [
        {
          match: /[\w-]+/,
          render: ({matched}) => <CollectionDetails handle={matched} />,
        },
      ],
    },
  ]);
}
