<template>
  <li class="border-l-4 border-black">
    <nuxt-link
      class="flex items-center justify-center w-full h-full px-4 py-2 font-medium"
      :to="linkData.to"
    >
      {{ linkData.label }}
    </nuxt-link>
  </li>
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
.nuxt-link-exact-active {
  @apply bg-primary-500 text-white;
}
</style>
