<template>
  <div class="border-l-4 border-black">
    <button
      class="flex items-center justify-center w-full h-full px-4 py-2 font-medium outline-none"
      @click="routeLink()"
    >
      {{ linkData.label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'TheHeaderNavItem',
  props: {
    linkData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    routeLink() {
      switch (this.linkData.type) {
        case 'internal':
          this.$router.push(this.linkData.to)
          break
        case 'external':
          window.location.href = this.linkData.to
          break
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply bg-primary-500 text-white;
}
</style>
