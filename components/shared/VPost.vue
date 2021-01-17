<template>
  <article class="relative overflow-hidden bg-primary-900 pb-2/3">
    <VImageLoader />

    <nuxt-link
      :to="post.path"
      no-prefetch
      class="absolute w-full h-full focus:outline-none focus-visible:border-2 border-primary-500 postLink"
      style="cursor: none"
      @mouseover.native="setHoverEffect('show')"
      @mouseleave.native="setHoverEffect('hide')"
    >
      <!-- Image -->
      <client-only>
        <cld-image
          :public-id="`lansolo.dev/posts/${post.imgCover}`"
          crop="fill"
          responsive="width"
          fetch-format="auto"
          width="500"
          :dpr="cloudinaryDpr"
          height="333"
          aspect_ratio="2:3"
          client_hints="true"
          quality="auto"
          sizes="100vw"
          :alt="post.title"
          class="absolute inset-0 object-cover transition duration-150 transform cdy-wrapper"
        >
          <cld-placeholder type="blur"> </cld-placeholder>
        </cld-image>
      </client-only>

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
      <div class="absolute bottom-0 left-0 mb-2 ml-2 mr-4">
        <!-- Date -->
        <VPostDate
          :date="post.createdAt"
          style="position: relative; top: -3px"
        />

        <!-- Title -->
        <h1 class="py-1 pt-0 leading-6 padded-multiline">
          <span class="inline p-2 text-xl text-white bg-black font-heading">{{
            post.title
          }}</span>
        </h1>
      </div>
    </nuxt-link>

    <VCursor v-if="isCustomCursorVisible" />
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
  data() {
    return {
      isCustomCursorVisible: false,
    }
  },

  methods: {
    setHoverEffect(status) {
      this.isCustomCursorVisible = status === 'show'
    },
  },
}
</script>

<style lang="postcss">
.padded-multiline span {
  box-decoration-break: clone;
}

.cdy-wrapper {
  img {
    @apply w-full h-full object-cover;
    transition: all;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.43, 0.56, 0, 1.02);
  }
}

.postLink {
  &:hover {
    .cdy-wrapper {
      img {
        filter: grayscale(100%);
        transform: scale(1.04);
      }
    }
  }
}
</style>
