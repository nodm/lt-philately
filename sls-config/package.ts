import type { Package } from 'serverless/aws';

export const packageConfig: Package = {
  individually: true,
  excludeDevDependencies: true,
  patterns: ['node_modules/aws-sdk/**'],
};
