import {Meta} from '@quilted/quilt/html';

export interface Props {
  url?: string | null;
  title?: string | null;
  description?: string | null;
}

export function TwitterSeo({url, title, description}: Props) {
  return (
    <>
      <Meta name="twitter:card" content="summary_large_image" />
      {url && <Meta name="twitter:site" content={url} />}
      {title && <Meta name="twitter:title" content={title} />}
      {description && <Meta name="twitter:description" content={description} />}
    </>
  );
}
