import {Meta} from '@quilted/quilt/html';

export interface Props {
  children?: string;
}

export function DescriptionSeo({children}: Props) {
  if (!children) {
    return null;
  }

  return (
    <>
      <Meta name="description" content={children} />
      <Meta property="og:description" content={children} />
    </>
  );
}
