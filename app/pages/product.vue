<script setup lang="ts">
const handle = "squirrel-car-refrigerator-magnets";

const { data } = await useStorefrontData(`product-${handle}`, `#graphql
  query GetProduct($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
    }
  }
`, {
  variables: {
    handle,
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
