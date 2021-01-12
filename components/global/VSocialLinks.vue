<template>
  <!-- Grid wrapper -->
  <div class="px-2 mt-5">
    <!-- Grid -->
    <div class="flex flex-wrap -mx-4 bg-orange-600">
      <!-- Items -->
      <div
        v-for="(link, i) in sociallinks"
        :key="i"
        class="relative flex-none w-12 h-12 px-2"
      >
        <a :href="link.url" :title="link.name">
          <postTypeShape class="w-full h-full fill-current text-primary-500" />
          <img
            class="absolute w-5 h-5 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            :src="`/img/social_${link.name}.svg`"
            :alt="link.name"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import postTypeShape from '~/assets/img/post_type_shape.svg?inline'

export default {
  name: 'VSocialLinks',
  components: {
    postTypeShape,
  },
  props: {
    sociallinks: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
