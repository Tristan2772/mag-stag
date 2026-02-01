<script lang="ts" setup>
const storefront = useStorefront();

const { data } = await storefront.request(`#graphql
query getCollectionByHandle($handle: String!) {
  collection(handle: $handle) {
    id
    title
    description
  }
}
`, {
  variables: {
    handle: "whats-new",
  },
});
</script>

<template>
  <div>
    <h1>
      {{ data.collection.title }}
    </h1>
    <p>{{ data.collection.description }}</p>
  </div>
</template>
