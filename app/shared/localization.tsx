import {createRoutePathLocalization} from '@quilted/quilt';

export const LOCALES = ['en', 'fr', 'en-US', 'fr-FR', 'de'];
export const LOCALE_COOKIE = 'CustomLocale';

export const routerLocalization = createRoutePathLocalization({
  locales: LOCALES,
  default: {locale: 'en', nested: true},
});
