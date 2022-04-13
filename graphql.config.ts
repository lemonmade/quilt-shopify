import type {Configuration} from '@quilted/craft/graphql';

const configuration: Configuration = {
  schema: './packages/shopify-storefront/graphql/2022-01.schema.graphql',
  documents: './app/**/*.graphql',
};

export default configuration;
