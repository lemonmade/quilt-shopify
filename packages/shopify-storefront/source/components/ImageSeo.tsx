import {Meta} from '@quilted/quilt/html';

export interface Props {
  url: string;
  altText?: string | null;
  width?: number | null;
  height?: number | null;
}

export function ImageSeo({url, width, height, altText}: Props) {
  return (
    <>
      {<Meta property="og:image" content={url} />}
      {<Meta property="og:image:secure_url" content={url} />}
      {width && <Meta property="og:image:width" content={String(width)} />}
      {height && <Meta property="og:image:height" content={String(height)} />}
      {altText && <Meta property="og:image:alt" content={altText} />}
    </>
  );
}
