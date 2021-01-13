<template>
  <article class="relative overflow-hidden pb-2/3">
    <nuxt-link :to="post.path">
      <!-- Image -->
      <nuxt-image
        class="absolute inset-0 object-cover"
        :src="post.imgCover"
        :alt="post.title"
        width="2000"
        height="1000"
        :placeholder="true"
        :sizes="`${640 * dpr},640:${500 * dpr},768:${530 * dpr},1280:${
          420 * dpr
        },1536:${500 * dpr}`"
      />

      <!-- Post type -->
      <div class="absolute top-0 right-0 w-8 h-8 mt-2 mr-2">
        <img
          class="absolute w-full h-full"
          src="~/assets/img/post_type_shape.svg"
          alt=""
        />

        <img
          class="absolute w-full h-full transform scale-60"
          :src="require(`~/assets/img/post_type_icon_${post.type}.svg`)"
          alt=""
        />
      </div>

      <!-- Date + title -->
      <div class="absolute bottom-0 left-0 mb-2 ml-2 mr-2">
        <!-- Date -->
        <VPostDate :date="post.createdAt" />

        <!-- Title -->
        <h1 class="py-1 pt-0 leading-6 padded-multiline">
          <span class="inline p-2 text-xl text-white bg-black font-heading">{{
            post.title
          }}</span>
        </h1>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
import dpr from '@/mixins/dpr.js'
export default {
  name: 'VPost',
  mixins: [dpr],
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss">
.padded-multiline span {
  box-decoration-break: clone;
}
</style>
