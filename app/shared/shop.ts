import {createContext} from 'react';
import {createContextHook} from './hooks';

export interface Shop {
  name: string;
}

export const ShopContext = createContext<Shop | null>(null);

export const useShop = createContextHook(
  ShopContext,
  'You must use `useShop` inside a `ShopContext`',
);
