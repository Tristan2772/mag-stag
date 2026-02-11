<script lang="ts" setup>
import jsonData from "../../assets/jsonData/navLinks.json";

const props = defineProps({
  isMobileMenu: Boolean!,
});
const navLinks = jsonData.navLinks;
const navDropdowns = jsonData.navDropdowns;
</script>

<template>
  <ul
    class="menu"
    :class="props.isMobileMenu ? 'dropdown-content mobile-list' : 'menu-horizontal px-1'"
    :tabindex="props.isMobileMenu ? -1 : undefined "
  >
    <li v-for="(navLink, index) in navLinks" :key="index">
      <NuxtLink :to="navLink.linkPath">
        {{ navLink.linkLabel }}
      </NuxtLink>
    </li>
    <li v-for="(navDropdown, index) in navDropdowns" :key="index">
      <details>
        <summary>
          {{ navDropdown.dropdownLabel }}
        </summary>
        <ul class="p-2" :class="props.isMobileMenu ? '' : 'top-10 bg-base-100 min-w-40 z-10'">
          <li v-for="(dropdownItem, itemIndex) in navDropdown.dropdownItems" :key="itemIndex">
            <NuxtLink :to="dropdownItem.linkPath">
              {{ dropdownItem.linkLabel }}
            </NuxtLink>
          </li>
        </ul>
      </details>
    </li>
  </ul>
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
