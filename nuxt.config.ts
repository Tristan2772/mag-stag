// https://nuxt.com/docs/api/configuration/nuxt-config
import { env } from "node:process";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/hints",
    "@nuxt/a11y",
    "@nuxt/ui",
    "@nuxtjs/shopify",
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  shopify: {
    name: "mag-stag",

    clients: {
      storefront: {
        apiVersion: "2025-07",
        publicAccessToken: env.SHOPIFY_PUBLIC_TOKEN,
      },
    },
  },
});
