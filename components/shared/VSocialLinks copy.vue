<template>
  <!-- Grid wrapper -->
  <div class="px-2">
    <!-- Grid -->
    <div class="flex flex-wrap -mx-4">
      <!-- Items -->
      <div
        v-for="(link, i) in sociallinks"
        :key="i"
        class="relative flex w-8 h-8 px-4"
      >
        <postTypeShape class="w-full h-full text-white fill-current" />
      </div>
    </div>
  </div>

  <!-- <ul class="flex flex-wrap">
    <li v-for="(link, i) in sociallinks" :key="i">
      <a :href="link.url"> 
        <postTypeShape class="w-4 h-4 fill-current text-primary-500" />
        </a>
      
    </li>
  </ul> -->
</template>

<script>
/* eslint-disable vue/no-unused-components */

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
