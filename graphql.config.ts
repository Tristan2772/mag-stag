import type { IGraphQLConfig } from "graphql-config";

const config = {
  projects: {
    default: {
      schema: "./.nuxt/schema/storefront.schema.json",
    },
  },
} satisfies IGraphQLConfig;

export default config;
