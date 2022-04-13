import {useCurrentUrl} from '@quilted/quilt';
import {Meta} from '@quilted/quilt/html';

import {TitleSeo} from './TitleSeo';
import {ImageSeo} from './ImageSeo';
import {DescriptionSeo} from './DescriptionSeo';
import {TwitterSeo} from './TwitterSeo';

export interface Props {
  url?: string;
  title: string;
  vendor: string;
  description: string;
  featuredImage?: {
    url: string;
    altText?: string | null;
    width?: number | null;
    height?: number | null;
  } | null;
  seo?: {title?: string | null; description?: string | null} | null;
  variants: {
    sku?: string | null;
    image?: {url: string} | null;
    availableForSale: boolean;
    priceV2: {amount: string; currencyCode: string};
  }[];
}

export function ProductSeo({
  url: explicitUrl,
  title,
  description,
  seo,
  vendor,
  featuredImage,
  variants,
}: Props) {
  const currentUrl = useCurrentUrl();
  const url = explicitUrl ?? currentUrl.href;

  const seoTitle = seo?.title ?? title;
  const seoDescription = seo?.description ?? description;
  const firstVariant = variants[0]!;

  if (firstVariant == null) {
    throw new Error(`There should be at least one variant!`);
  }

  const productSchema: Record<string, unknown> = {
    '@context': 'http://schema.org/',
    '@type': 'Product',
    name: title,
    description,
    brand: {
      '@type': 'Thing',
      name: vendor,
    },
    url,
  };

  if (featuredImage) {
    productSchema.image = featuredImage.url;
  }

  if (firstVariant.sku) {
    productSchema.sku = firstVariant.sku;
  }

  productSchema.offers = variants.map((variant) => {
    const offerSchema: Record<string, unknown> = {
      '@type': 'Offer',
      availability: `https://schema.org/${
        variant.availableForSale ? 'InStock' : 'OutOfStock'
      }`,
      price: variant.priceV2.amount,
      priceCurrency: variant.priceV2.currencyCode,
    };

    if (variant.sku) {
      offerSchema.sku = variant.sku;
    }

    if (variant.image && variant.image.url) {
      offerSchema.image = variant.image.url;
    }

    return offerSchema;
  });

  return (
    <>
      <TitleSeo>{seoTitle}</TitleSeo>
      <DescriptionSeo>{seoDescription}</DescriptionSeo>
      {featuredImage ? <ImageSeo {...featuredImage} /> : null}

      <Meta property="og:type" content="og:product" />
      <Meta property="og:price:amount" content={firstVariant.priceV2.amount} />
      <Meta
        property="og:price:currency"
        content={firstVariant.priceV2.currencyCode}
      />

      <TwitterSeo url={url} title={seoTitle} description={seoDescription} />

      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
    </>
  );
}
