<script lang="ts" setup>
const storefront = useStorefront()

const { data } = await storefront.request(`#graphql
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
    handle: 'featured',
  }
})

type ProductNode = {
  id: string;
  title: string;
  availableForSale: boolean;
  images: {
    edges: {
      node: {
        id: string;
        url: string;
        width: number;
        height: number;
        altText: string | null;
      };
    }[];
  };
};

type Product = {
  id: string;
  title: string;
  available: boolean;
  imageUrl: string | undefined;
};

const products = computed<Product[]>(() => 
  data.collection.products.edges.map(({ node }: { node: ProductNode }) => ({
    id: node.id,
    title: node.title,
    available: node.availableForSale,
    imageUrl: node.images.edges[0]?.node.url,
  }))
);
</script>
<template>
  <div>
    <h1>
      {{ data.collection.title }}
    </h1>
    <p>{{data.collection.description}}</p>
    <div >
      <div class="product-container">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img v-if="product.imageUrl" :src="product.imageUrl" :alt="product.title">
          <div>
            <h3>{{ product.title }}</h3>
            <p v-if="!product.available">Out of Stock</p>
            <p v-else>In Stock</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .product-container {
    display: flex;
    flex-direction: row;
  }
</style>
