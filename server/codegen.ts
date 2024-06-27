import type { CodegenConfig } from '@graphql-codegen/cli';
import { GraphQLDateTime } from 'graphql-scalars';
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.mjs';

const config: CodegenConfig = {
  schema: 'schema.graphql',
  generates: {
    './resolvers-types.ts': {
      config: {
        useIndexSignature: true,
      },
      plugins: [
        {
          typescript: {},
        },
        {
          'typescript-resolvers': {
            scalars: {
              DateTime: GraphQLDateTime, 
              Upload: graphqlUploadExpress
            },
          },
        },
      ],
    },
  },
};
export default config;
