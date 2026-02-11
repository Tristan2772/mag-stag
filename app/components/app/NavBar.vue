<template>
  <div class="navbar bg-base-100 shadow-sm fixed mt-2 inset-x-2 w-auto z-10 rounded-2xl">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <Icon name="tabler:menu-3" size="24px" />
        </div>
        <app-nav-bar-responsive-menu :is-mobile-menu="true" />
      </div>
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        StagMag
      </NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <app-nav-bar-responsive-menu :is-mobile-menu="false" />
    </div>
    <div class="navbar-end">
      <NuxtLink to="/bag" class="btn">
        My Bag
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
</style>
