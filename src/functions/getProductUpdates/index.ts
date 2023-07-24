import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  memorySize: 128,
  timeout: 20,
  events: [
    {
      http: {
        method: 'get',
        path: 'get-product-updates',
      },
    },
  ],
};
