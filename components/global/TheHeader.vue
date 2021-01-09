<template>
  <div class="fixed flex text-black bg-white border-b-4 border-black header">
    <!-- Logo -->
    <div class="flex-grow px-4 py-2 bg-red">
      <img src="logo.svg" alt="lansolo.dev" />
    </div>

    <!-- Nav -->
    <nav>
      <ul class="flex h-full">
        <TheHeaderNavItem
          v-for="(link, i) in navLinks"
          :key="i"
          :link-data="link"
        />
      </ul>
    </nav>

    <!-- Desktop Nav -->
    <!-- Hamburger -->
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
