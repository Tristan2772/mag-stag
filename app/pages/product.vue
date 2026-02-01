<script setup lang="ts">
const storefront = useStorefront();

const { data } = await storefront.request(`#graphql
  query GetProduct($handle: String!) {
    product(handle: $handle) {
    id
    title
    description
    media(first: 1) {
          edges {
            node {
              mediaContentType
              alt
            }
          }
        }

  }
  }
`, {
  variables: {
    handle: "squirrel-car-refrigerator-magnets",
  },
});
</script>

<template>
  <div v-if="data">
    <h1>{{ data.product.title }}</h1>
    <p>{{ data.product.description }}</p>
    <p>{{ data.product.media.node }}</p>
  </div>
</template>
