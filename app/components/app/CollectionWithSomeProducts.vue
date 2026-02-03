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
          images(first: 5) {
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
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          compareAtPriceRange {
            minVariantPrice {
              amount
              currencyCode
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
    price: node.priceRange.minVariantPrice.amount,
    compareAtPrice: node.priceRange.minVariantPrice.amount,
    images: node.images.edges.map(({ node: imageNode }) => ({
      id: imageNode.id,
      url: imageNode.url,
      width: imageNode.width,
      height: imageNode.height,
      altText: imageNode.altText,
    })),
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
        <app-product-card
          v-for="product in products"
          :key="product.id"
          :images="product.images"
          :available="product.available"
          :title="product.title"
          :price="product.price"
          :compare-at-price="product.compareAtPrice"
        />
      </div>
    </div>
  </div>
</template>
