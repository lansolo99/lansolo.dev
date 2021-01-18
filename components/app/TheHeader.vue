<template>
  <div>
    <div
      class="fixed z-50 flex w-full text-black transform bg-white border-4 border-black"
      style="height: 49px"
    >
      <!-- Logo -->
      <div class="flex-grow py-2 pl-1 md:pl-2 md:px-4">
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

      <!-- Desktop Nav -->
      <nav class="hidden h-full md:flex">
        <TheHeaderNavItem
          v-for="(link, i) in navLinks"
          :key="i"
          context="desktop"
          :link-data="link"
        />
      </nav>

      <!-- Mobile menu -->
      <button
        v-click-outside="hideMobileNav"
        class="flex items-center justify-center w-20 px-3 m-2 text-sm font-bold border-4 border-black focus:outline-none md:hidden"
        :class="{ 'bg-primary-500 text-white': isMobileMenuOpen }"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <span v-if="!isMobileMenuOpen">MENU</span>
        <span v-else>CLOSE</span>
      </button>
    </div>
    <!-- Mobile nav -->
    <transition name="slideDown">
      <nav
        v-if="isMobileMenuOpen"
        class="fixed top-0 left-0 z-40 block w-full mt-12 text-xl font-medium text-black bg-white border-l-4 border-r-4 border-black md:hidden"
      >
        <!-- style="width: calc(100% - 8px)" -->
        <TheHeaderNavItem
          v-for="(link, i) in navLinks"
          :key="i"
          context="mobile"
          :link-data="link"
          @closeMobileMenu="isMobileMenuOpen = false"
        />
      </nav>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import vClickOutside from 'v-click-outside'

export default {
  name: 'Header',
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      isMobileMenuOpen: false,
    }
  },
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
    hideMobileNav() {
      this.isMobileMenuOpen = false
    },
  },
}
</script>

<style lang="postcss">
.slideDown-enter-active,
.slideDown-leave-active {
  transition: all 0.3s ease-out;
  transform: translateY(0);
}

.slideDown-enter,
.slideDown-leave-to {
  transform: translateY(-100%);
}
</style>
