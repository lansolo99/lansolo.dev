<template>
  <article class="relative overflow-hidden bg-primary-900 pb-2/3">
    <VImageLoader />

    <nuxt-link
      :to="post.path"
      no-prefetch
      class="absolute w-full h-full focus:outline-none focus-visible:border-2 border-primary-500 postLink"
      :class="{ 'postLink--waitCursor': isDefaultCursorVisible }"
      @mouseover.native="setPostHoverCursors(true)"
      @mouseleave.native="setPostHoverCursors(false)"
      @click.native="setPostHoverCursors(false)"
    >
      <img
        :src="`https://res.cloudinary.com/lansolo99/image/upload/c_fill,dpr_${cloudinaryDpr},q_auto,f_auto,w_500,h_333/lansolo.dev/posts/${post.imgCover}`"
        alt=""
        class="cdy-wrapper"
      />

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
import { mapState, mapMutations } from 'vuex'
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
      isDefaultCursorVisible: true,
    }
  },
  computed: {
    ...mapState(['isCustomCursorVisible']),
  },
  methods: {
    ...mapMutations({
      setCustomCursorState: 'SET_CUSTOM_CURSOR_STATE',
    }),
    setPostHoverCursors(customCursorStatus) {
      switch (customCursorStatus) {
        case true:
          this.isDefaultCursorVisible = false
          break
        case false:
          this.isDefaultCursorVisible = true
          break
      }
      this.setCustomCursorState(customCursorStatus)
    },
  },
}
</script>

<style lang="postcss" scoped>
.padded-multiline span {
  box-decoration-break: clone;
}

.cdy-wrapper {
  @apply w-full h-full transform absolute inset-0 object-cover transition duration-200 ease-out;
}

@screen lg {
  #grid {
    article {
      .cdy-wrapper {
        &:hover {
          transform: scale(1.02) !important;
        }
      }
      &:not(:first-child) {
        .cdy-wrapper {
          filter: grayscale(0%);

          &:hover {
            filter: grayscale(0%);
          }
        }
      }
    }
  }

  .postLink {
    cursor: none;

    &--waitCursor {
      cursor: pointer;
    }
  }
}
</style>
