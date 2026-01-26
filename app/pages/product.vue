<script setup lang="ts">
const storefront = useStorefront()

const { data } = await storefront.request(`#graphql
  query GetProduct($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
    }
  }
`, {
  variables: {
    handle: 'high-top-sneakers',
  }
})
</script>

<template>
  <div v-if="data">
    <h1>{{ data.product.title }}</h1>
    <p>{{ data.product.description }}</p>
  </div>
</template>
