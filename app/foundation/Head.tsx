import {Title, Viewport, Favicon} from '@quilted/quilt/html';

import {useShop} from '~/shared/shop';

export function Head() {
  const shop = useShop({required: false});

  if (shop == null) return null;

  return (
    <>
      {/**
       * Sets the default `<title>` for this application.
       */}
      <Title>{shop.name}</Title>

      {/**
       * Sets the default favicon used by the application. You can
       * change this to a different emoji, make it `blank`, or pass
       * a URL with the `source` prop.
       */}
      <Favicon emoji="🛍" />

      {/**
       * Adds a responsive-friendly `viewport` `<meta>` tag.
       */}
      <Viewport cover />
    </>
  );
}
