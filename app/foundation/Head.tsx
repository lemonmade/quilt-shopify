import {Title, Viewport, Favicon} from '@quilted/quilt/html';

export function Head() {
  return (
    <>
      {/**
       * Sets the default `<title>` for this application.
       */}
      <Title>Shop</Title>

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
