<template>
  <div
    class="fixed z-50 flex text-black bg-white border-t-4 border-b-4 border-black header"
    style="height: 49px"
  >
    <!-- Logo -->
    <button class="flex-grow px-4 py-2 outline-none bg-red" @click="setTag">
      <img src="/logo.svg" alt="lansolo.dev" style="height: 28px" />
    </button>

    <!-- Nav -->
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
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapState(['navLinks']),
  },
  methods: {
    ...mapMutations({
      setSelectedTag: 'SET_SELECTED_TAGS',
    }),
    setTag(label) {
      this.setSelectedTag([])
      this.$router.push('/')
    },
  },
}
</script>

<style lang="postcss" scoped>
.header {
  width: calc(100% - 8px);
}
</style>
