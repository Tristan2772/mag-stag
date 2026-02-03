<script lang="ts" setup>
import type { ProductNode } from "~/lib/types";

const props = defineProps({
  handle: String,
});
const handle = props.handle;

const { data } = await useStorefrontData(`collection-${handle}`, `#graphql
query getProductsinCollection($handle: String!) {
  collection(handle: $handle) {
    id
    title
    description
    products(first: 5) {
      edges {
        node {
          id
          title
          availableForSale
          images(first: 1) {
            edges {
              node {
                id
                url
                width
                height
                altText
              }
            }
          }
        }
      }
    }
  }
}
`, {
  variables: {
    handle,
  },
});
const products = computed<Product[]>(() =>
  data.value.collection.products.edges.map(({ node }: { node: ProductNode }) => ({
    id: node.id,
    title: node.title,
    available: node.availableForSale,
    imageUrl: node.images.edges[0]?.node.url,
  })),
);
</script>

<template>
  <div>
    <h2>
      {{ data.collection.title }}
    </h2>
    <p>{{ data.collection.description }}</p>
    <div class="flex flex-col">
      <div class="flex">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img v-if="product.imageUrl" :src="product.imageUrl" :alt="product.title">
          <div>
            <h3>{{ product.title }}</h3>
            <p v-if="!product.available">
              Out of Stock
            </p>
            <p v-else>
              In Stock
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
