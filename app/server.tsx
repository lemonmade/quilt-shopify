import {
  createHttpHandler,
  createHttpHandlerLocalization,
  createServerRenderingRequestHandler,
} from '@quilted/quilt/server';
import assets from '@quilted/quilt/magic/asset-loader';

import {routerLocalization, LOCALE_COOKIE} from '~/shared/localization';

import App from './App';

const httpHandler = createHttpHandler();

const localization = createHttpHandlerLocalization({
  localization: routerLocalization,
  requestLocale(request, getDefaultResult) {
    return request.cookies.get(LOCALE_COOKIE) ?? getDefaultResult();
  },
});

const requestHandler = createServerRenderingRequestHandler(App, {
  assets,
});

httpHandler.get(
  localization.localizedRequestHandler(requestHandler, {
    include: (request) => request.url.pathname === '/',
  }),
);

export default httpHandler;
