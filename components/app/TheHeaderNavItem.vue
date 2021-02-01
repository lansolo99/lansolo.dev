<template>
  <div
    class="border-b-4 border-black md:border-b-0 md:border-l-4 border-x-4 md:border-x-0 group"
  >
    <nuxt-link
      v-if="linkData.type === 'internal'"
      :to="linkData.to"
      class="link"
      @click="$emit('closeMobileMenu')"
    >
      {{ linkData.label }}
    </nuxt-link>

    <a
      v-else
      class="link"
      target="_blank"
      rel="noopener noreferrer"
      :href="linkData.to"
      @click="$emit('closeMobileMenu')"
    >
      <div class="relative flex items-center">
        <span>{{ linkData.label }}</span>
        <IconLinkExternal
          class="w-4 h-4 fill-current lg:group-hover:text-white"
          :class="[
            context === 'desktop'
              ? 'ml-2 -mt-1 relative'
              : 'absolute right-0  ml-10 -mr-6 top-1',
          ]"
        />
      </div>
    </a>
  </div>
</template>

<script>
import IconLinkExternal from '~/assets/img/external-link.svg?inline'
export default {
  name: 'TheHeaderNavItem',
  components: {
    IconLinkExternal,
  },
  props: {
    context: {
      type: String,
      required: true,
    },
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
