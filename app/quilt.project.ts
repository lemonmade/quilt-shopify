import {createApp, quiltApp} from '@quilted/craft';
import {reactQuery} from '@quilted/react-query/craft';

export default createApp((app) => {
  app.entry('./App');
  app.use(quiltApp(), reactQuery());
});
