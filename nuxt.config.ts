// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/a11y',
    '@nuxt/ui',
    '@nuxtjs/shopify'
  ],

  shopify: {
    name: 'mag-stag',

    clients: {
      storefront: {
        apiVersion: '2025-07',
        publicAccessToken: process.env.SHOPIFY_PUBLIC_TOKEN,
      },
    },
  }
})
