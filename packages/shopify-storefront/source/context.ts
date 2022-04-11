import {createContext} from 'react';
import type {GraphQL} from '@quilted/quilt';

export const StorefrontGraphQLContext = createContext<GraphQL | null>(null);
