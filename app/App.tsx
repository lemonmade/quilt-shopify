// import {useMemo} from 'react';

import {App as QuiltApp, useMatch, Link} from '@quilted/quilt';
import type {PropsWithChildren} from '@quilted/quilt';
import {SWRContext} from '@quilted/swr';
import {StorefrontContext} from 'quilt-shopify-storefront';

import {Head} from './foundation/Head';
import {Http} from './foundation/Http';
import {Routes} from './foundation/Routes';

import './App.css';

export default function App() {
  return (
    <QuiltApp>
      <SWRContext>
        <StorefrontContext
          shop="admin4"
          apiVersion="2022-01"
          accessToken="1a5b27351394e40d9e3be25900b7d1f2"
        >
          <Http />
          <Head />
          <Frame>
            <Routes />
          </Frame>
        </StorefrontContext>
      </SWRContext>
    </QuiltApp>
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
      <div>{children}</div>
    </div>
  );
}
