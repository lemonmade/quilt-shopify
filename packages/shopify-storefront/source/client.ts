import {createGraphQL, createGraphQLHttpFetch} from '@quilted/quilt';

import type {ApiVersion} from './types';

export interface Options {
  /**
   * The shop to fetch storefront API requests from. When not provided,
   * this component will default to querying the storefront API on the
   * current origin. You can force another shop origin by passing a string
   * as this prop, which can be either the shop name or origin.
   */
  shop?: string;
  accessToken: string;
  apiVersion?: ApiVersion;
}

const HEADER_STOREFRONT_ACCESS_TOKEN = 'X-Shopify-Storefront-Access-Token';

export function createStorefrontGraphQLFetch({
  shop,
  accessToken,
  apiVersion = '2022-01',
}: Options) {
  const uri = `${
    shop ? shopToOrigin(shop) : ''
  }/api/${apiVersion}/graphql.json`;

  return createGraphQLHttpFetch({
    uri,
    headers: {
      [HEADER_STOREFRONT_ACCESS_TOKEN]: accessToken,
    },
  });
}

export function createStorefrontGraphQL(options: Options) {
  return createGraphQL({
    fetch: createStorefrontGraphQLFetch(options),
  });
}

function shopToOrigin(shop: string) {
  if (shop.startsWith('https://')) return shop;
  if (shop.endsWith('.myshopify.com')) return `https://${shop}`;
  return `https://${shop}.myshopify.com`;
}
