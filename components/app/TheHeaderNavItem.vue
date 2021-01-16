<template>
  <div class="border-l-4 border-black">
    <nuxt-link
      v-if="linkData.type === 'internal'"
      :to="linkData.to"
      class="link focus:outline-none focus-visible:bg-primary-400"
    >
      {{ linkData.label }}
    </nuxt-link>

    <a
      v-else
      class="link focus:outline-none focus-visible:bg-primary-400"
      :href="linkData.to"
    >
      {{ linkData.label }}
    </a>
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
}
</script>

<style lang="postcss" scoped>
.link {
  @apply flex items-center justify-center w-full h-full px-4 py-2 font-medium outline-none;
}

.nuxt-link-exact-active {
  @apply bg-primary-500 text-white;
}
</style>
