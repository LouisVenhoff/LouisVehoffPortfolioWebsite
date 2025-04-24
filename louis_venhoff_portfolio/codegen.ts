import type { CodegenConfig } from '@graphql-codegen/cli';
import "dotenv/config";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "https://api.github.com/graphql": {
        headers: {
          Authorization: `Bearer ${process.env.VITE_GITHUB_PAT}`,
          "User-Agent": "LouisVenhoffPortfolio/1.0.0"
        },
      },
    },
  ],
  documents: "src/**/*.tsx",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
