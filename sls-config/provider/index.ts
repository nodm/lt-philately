import type { Provider } from 'serverless/aws';
import { apiGateway } from './apiGateway';
import { environment } from './environment';

export const provider: Provider = {
  name: 'aws',
  runtime: 'nodejs18.x',
  region: 'eu-north-1',
  stage: 'production',
  environment,
  apiGateway,
};
