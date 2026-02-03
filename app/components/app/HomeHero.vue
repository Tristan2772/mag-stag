<script setup>
import heroImage from "~/assets/home-hero.png";
</script>

<template>
  <div
    class="hero min-h-screen"
    :style="`background-image: url(${heroImage});`"
  >
    <div class="hero-overlay" />
    <div class="hero-content text-neutral-content text-center">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">
          Hey there, deer
        </h1>
        <p class="mb-5">
          Welcome to the Mag Stag Store. I have a plethora of crazy, funny, and crazy funny magnets so have a look, have a laugh, and have a mag from the Mag Stag!
        </p>
        <a href="#home-collections" class="btn btn-primary">
          View Magnets
        </a>
      </div>
    </div>
  </div>
</template>
