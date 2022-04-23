// import {useMemo} from 'react';

import {
  AppContext as QuiltContext,
  useMatch,
  Link,
  LocalizedRouter,
} from '@quilted/quilt';
import type {PropsWithChildren} from '@quilted/quilt';
import {SWRContext} from '@quilted/swr';
import {StorefrontContext} from 'quilt-shopify-storefront';

import {routerLocalization} from '~/shared/localization';

import {AppContext} from './foundation/AppContext';
import {Head} from './foundation/Head';
import {Http} from './foundation/Http';
import {Routes} from './foundation/Routes';

import './App.css';

export default function App() {
  return (
    <QuiltContext>
      <LocalizedRouter localization={routerLocalization}>
        <SWRContext>
          <StorefrontContext
            shop="admin4"
            apiVersion="2022-01"
            accessToken="1a5b27351394e40d9e3be25900b7d1f2"
          >
            <AppContext>
              <Http />
              <Head />
              <Frame>
                <Routes />
              </Frame>
            </AppContext>
          </StorefrontContext>
        </SWRContext>
      </LocalizedRouter>
    </QuiltContext>
  );
}

function Frame({children}: PropsWithChildren) {
  const isRoot = useMatch('/');

  return (
    <div>
      <h1 className="text-3xl font-bold text-fuchsia-900">Hello world!</h1>
      {!isRoot && (
        <div>
          <Link to="/">Home</Link>
        </div>
      )}
      <div>
        <Link to="/locale">Locale</Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
