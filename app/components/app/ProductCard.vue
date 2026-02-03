<script lang="ts" setup>
import type { ProductImages } from "~/lib/types";

const props = defineProps({
  title: String!,
  available: Boolean!,
  price: String!,
  compareAtPrice: String!,
  images: {
    type: Array as () => ProductImages[],
    default: () => [],
  },
});
</script>

<template>
  <div>
    <img v-if="props.images[0]" :src="props.images[0].url" :alt="props.images[0].altText || props.title">
    <div>
      <h3>{{ props.title }}</h3>
      <p> {{ props.price }}</p>
      <p> {{ props.compareAtPrice }}</p>
      <p v-if="!props.available">
        Out of Stock
      </p>
      <p v-else>
        In Stock
      </p>
    </div>
  </div>
</template>
