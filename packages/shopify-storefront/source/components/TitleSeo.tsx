import {Meta, Title} from '@quilted/quilt/html';

export interface Props {
  children: string;
}

export function TitleSeo({children}: Props) {
  return (
    <>
      <Title>{children}</Title>
      <Meta property="og:title" content={children} />
    </>
  );
}
