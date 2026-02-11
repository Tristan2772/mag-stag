<script lang="ts" setup>
import type { ProductImages } from "~/lib/types";

const props = defineProps({
  title: String!,
  description: String!,
  available: Boolean!,
  price: String!,
  compareAtPrice: String!,
  isActiveProduct: Boolean!,
  images: {
    type: Array as () => ProductImages[],
    default: () => [],
  },
});
</script>

<template>
  <div
    class="card card-sm shadow-sm"
    :class="isActiveProduct ? 'bg-base-200 w-1/2' : 'bg-base-100'"
  >
    <figure v-if="props.images[0]">
      <img
        :src="props.images[0].url"
        :alt="props.images[0].altText || props.title"
      >
    </figure>
    <div v-if="props.isActiveProduct" class="card-body">
      <h3 class="card-title">
        {{ props.title }}
      </h3>
      <p>{{ props.description }}</p>
      <div class="flex justify-between">
        <div class="flex items-center gap-1">
          <p class="line-through text-xs">
            {{ props.compareAtPrice }}
          </p>
          <p class="text-sm">
            {{ props.price }}
          </p>
        </div>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
