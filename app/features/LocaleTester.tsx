import {
  useCookies,
  useLocale,
  useLocaleFromEnvironment,
  useLocalizedFormatting,
  LocalizedLink,
  useRouteLocalization,
} from '@quilted/quilt';

import {LOCALE_COOKIE} from '~/shared/localization';

export function LocaleTester() {
  const locale = useLocale();
  const requestLocale = useLocaleFromEnvironment();
  const {formatCurrency} = useLocalizedFormatting();
  const routeLocalization = useRouteLocalization();

  const cookies = useCookies();

  return (
    <div>
      <div>Locale: {locale}</div>
      <div>Route locale: {routeLocalization.locale}</div>
      <div>Request locale: {requestLocale}</div>
      <div>Cookie locale: {cookies.get(LOCALE_COOKIE)}</div>
      <div>Formatted: {formatCurrency(1_000, {currency: 'CAD'})}</div>
      <div>
        <button
          type="button"
          onClick={() => {
            cookies.delete(LOCALE_COOKIE);
            window.location.reload();
          }}
        >
          Delete cookie
        </button>
      </div>
      <div>
        {routeLocalization.locales.map((otherLocale) => (
          <LocalizedLink
            style={{display: 'block'}}
            key={otherLocale}
            locale={otherLocale}
            onClick={() => cookies.set(LOCALE_COOKIE, otherLocale)}
          >
            Change locale to {otherLocale}
            {otherLocale === routeLocalization.locale ? ' (current)' : ''}
          </LocalizedLink>
        ))}
      </div>
    </div>
  );
}
