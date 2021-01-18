<template>
  <article class="relative overflow-hidden bg-primary-900 pb-2/3">
    <VImageLoader />

    <nuxt-link
      :to="post.path"
      no-prefetch
      class="absolute w-full h-full focus:outline-none focus-visible:border-2 border-primary-500 postLink"
      @mouseover.native="setCustomCursorState(true)"
      @mouseleave.native="setCustomCursorState(false)"
      @click.native="setCustomCursorState(false)"
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
          loading="lazy"
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

      <!-- Overlay -->
      <div
        class="absolute inset-0 transition duration-200 ease-out pointer-events-none bg-primary-500 overlay"
      ></div>

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
  </article>
</template>

<script>
import { mapMutations } from 'vuex'
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
  methods: {
    ...mapMutations({
      setCustomCursorState: 'SET_CUSTOM_CURSOR_STATE',
    }),
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
    transition: transform;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
  }
}

.overlay {
  opacity: 0;
}

@screen lg {
  .postLink {
    cursor: none;

    &:hover {
      .overlay {
        opacity: 0.8;
      }
      .cdy-wrapper {
        img {
          transform: scale(1.02);
        }
      }
    }
  }
}
</style>
