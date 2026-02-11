<script lang="ts" setup>
import { useWindowScroll } from "@vueuse/core";

const isNavbarVisible = ref(true);
const { y } = useWindowScroll();
const previousY = ref(0);

watch(y, (newY) => {
  isNavbarVisible.value = newY < previousY.value || newY <= 0;
  previousY.value = newY;
});
</script>

<template>
  <div>
    <Transition name="nav-top-fade">
      <app-nav-bar v-show="isNavbarVisible" />
    </Transition>
    <slot />
  </div>
</template>

<style scoped>
.nav-top-fade-enter-active {
  transition: all 0.15s ease-out;
}

.nav-top-fade-leave-active {
  transition: all 0.25s ease-out;
}

.nav-top-fade-enter-from,
.nav-top-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
