<template>
  <div
    class="fixed z-50 flex w-full text-black bg-white border-4 border-black"
    style="height: 49px"
  >
    <!-- Logo -->
    <div class="flex-grow px-4 py-2">
      <button
        class="focus:outline-none focus-visible:outline-black"
        @click="setTag"
      >
        <img
          src="/logo.svg"
          alt="lansolo.dev"
          style="height: 28px"
          width="139"
          height="30"
        />
      </button>
    </div>

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
