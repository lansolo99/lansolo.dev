<template>
  <div
    class="fixed z-50 flex text-black bg-white border-t-4 border-b-4 border-black header"
    style="height: 49px"
  >
    <!-- Logo -->
    <nuxt-link to="/" class="flex-grow px-4 py-2 bg-red">
      <img src="/logo.svg" alt="lansolo.dev" />
    </nuxt-link>

    <!-- Nav -->
    <!-- <div class="bg-red-800">test</div> -->
    <nav class="hidden h-full md:flex">
      <TheHeaderNavItem
        v-for="(link, i) in navLinks"
        :key="i"
        :link-data="link"
      />
    </nav>

    <!-- Hamburger -->
    <div
      class="flex items-center justify-center px-3 m-2 font-medium border-4 border-black md:hidden"
    >
      Menu
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapState(['navLinks']),
  },
}
</script>

<style lang="postcss" scoped>
.header {
  width: calc(100% - 8px);
}
</style>
