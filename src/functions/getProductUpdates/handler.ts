import { StatusCodes } from 'http-status-codes';

const getProductUpdates = async (): Promise<{ statusCode: StatusCodes; body: string }> =>
  Promise.resolve({
    statusCode: StatusCodes.OK,
    body: 'Hello World!',
  });

export const main = getProductUpdates;
