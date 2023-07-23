import type { Serverless } from 'serverless/aws';
import { custom, functions, plugins, provider, packageConfig } from './sls-config';

const serverlessConfiguration: Serverless = {
  service: 'lt-philately',
  frameworkVersion: '3',
  configValidationMode: 'error',
  plugins,
  provider,
  functions,
  package: packageConfig,
  custom,
};

module.exports = serverlessConfiguration;
