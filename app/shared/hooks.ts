import {useContext} from 'react';
import type {Context} from 'react';

export interface RequiredHook<T> {
  <Required extends boolean = true>(options?: {
    required?: Required;
  }): Required extends true ? NonNullable<T> : NonNullable<T> | undefined;
}

export function createContextHook<T>(
  Context: Context<T>,
  missingMessage: string,
): RequiredHook<T> {
  return ({required = true} = {}) => {
    const contextValue = useContext(Context);

    if (contextValue == null && required) {
      throw new Error(missingMessage);
    }

    return contextValue!;
  };
}
