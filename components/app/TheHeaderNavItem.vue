<template>
  <div class="border-l-4 border-black">
    <nuxt-link
      v-if="linkData.type === 'internal'"
      :to="linkData.to"
      class="link"
    >
      {{ linkData.label }}
    </nuxt-link>

    <a v-else class="link" :href="linkData.to">
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
  @apply flex items-center justify-center w-full h-full px-4 py-2 font-medium outline-none transition duration-150 ease-out;

  @screen lg {
    &:hover {
      @apply bg-black text-white;
    }
  }

  &:focus {
    @apply outline-none;
  }

  &:focus-visible {
    @apply bg-primary-400;
  }
}

.nuxt-link-exact-active {
  @apply bg-primary-500 text-white pointer-events-none;
}
</style>
