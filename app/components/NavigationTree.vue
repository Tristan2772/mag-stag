<script setup lang="ts">

</script>

<template>
  <nav>
    <div class="left-nav">
      <NuxtLink to="/">
        <img src="@/assets/mag-stag-logo.png" alt="Mag Stag Logo">
      </NuxtLink>
      <NuxtLink to="/collections/featured">Featured</NuxtLink>
      <NuxtLink to="/collections/new">What's New</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.left-nav{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
img {
  width: 50px;
  height: 50px;
}
</style>
