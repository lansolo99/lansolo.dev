<template>
  <main id="index" class="flex flex-col items-start sm:flex-row">
    <HpSidebar />

    <div
      id="gridWrapper"
      class="w-full sm:w-8/12 md:w-9/12 lg:w-10/12 2xl:w-10/12"
    >
      <HpGridPosts :key="hpGridPostsKey" :context="context" :posts="posts" />

      <client-only>
        <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler">
          <span slot="spinner"></span>
          <span slot="no-more"></span>
          <span slot="no-results"></span>
        </infinite-loading>
      </client-only>
    </div>
  </main>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'Index',
  components: {
    InfiniteLoading,
  },
  async fetch() {
    const fetchDatas = await this.fetchData()

    this.posts = await fetchDatas.posts

    const postsCounter = await fetchDatas.postsCounter
    this.setCurrentPostsCounter(postsCounter)
  },
  data() {
    return {
      context: 'home',
      hpGridPostsKey: 0,
      page: 0,
      limit: 16,
      posts: [],
      postsCounter: null,
      infiniteId: +new Date(),
    }
  },
  computed: {
    ...mapState(['selectedTags']),
  },
  watch: {
    selectedTags(newValue, oldValue) {
      console.log('%cselectedTags has changed', 'color: cyan; font-size: 14px')
      this.resetInfinite()
    },
  },
  beforeDestroy() {
    this.setCustomCursorState(false)
  },
  methods: {
    ...mapMutations({
      setCustomCursorState: 'SET_CUSTOM_CURSOR_STATE',
      setCurrentPostsCounter: 'SET_CURRENT_POSTS_COUNTER',
    }),
    async fetchData() {
      const posts = await this.$content('posts')
        .only(['title', 'type', 'imgCover', 'tags', 'createdAt', 'path'])
        .where(this.setFilter())
        .limit(this.limit)
        .skip(this.limit * this.page)
        .sortBy('createdAt', 'desc')
        .fetch()

      const postsCounter = await this.$content('posts')
        .only(['title', 'type', 'imgCover', 'tags', 'createdAt', 'path'])
        .where(this.setFilter())
        .fetch()

      return { posts, postsCounter: postsCounter.length }
    },
    setFilter() {
      if (this.selectedTags.length === 0) return null

      return { tags: { $containsAny: this.selectedTags } }
    },
    async infiniteHandler($state) {
      console.log('infiniteHandler')
      this.page += 1
      const additionalItems = await this.fetchData()

      if (additionalItems.length > 0) {
        this.posts.push(...additionalItems)
        $state.loaded()
      } else {
        $state.complete()
      }
    },
    async resetInfinite() {
      this.page = 0

      const fetchDatas = await this.fetchData()

      this.posts = await fetchDatas.posts

      const postsCounter = await fetchDatas.postsCounter
      this.setCurrentPostsCounter(postsCounter)

      this.hpGridPostsKey++
      this.infiniteId += 1
    },
  },
}
</script>

<style lang="postcss">
:root {
  --tduration: 300ms;
  --tdelay: 100ms;
}

.page-enter-active,
.page-leave-active {
  transition-duration: calc(var(--tduration) * 2);

  &::before,
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    display: block;
    width: 100%;
    height: 50%;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(1, -0.12, 0, 1.04);
  }

  &::before {
    @apply bg-primary-500;
  }

  &::after {
    top: 50%;
    @apply bg-primary-500;
  }
}

.page-leave {
  &::before,
  &::after {
    transform: scaleX(0);
  }
}

.page-leave-active {
  &::before {
    transition-duration: var(--tduration);
  }

  &::after {
    transition-duration: calc(var(--tduration) - var(--tdelay));
    transition-delay: var(--tdelay);
  }
}

.page-leave-to {
  &::before,
  &::after {
    transform: scale(1);
    transform-origin: left;
  }
}

.page-enter {
  &::before,
  &::after {
    transform: scaleX(1);
  }
}

.page-enter-active {
  &::before {
    transition-duration: var(--tduration);
  }

  &::after {
    transition-duration: calc(var(--tduration) - var(--tdelay));
    transition-delay: var(--tdelay);
  }
}

.page-enter-to {
  &::before,
  &::after {
    transform: scaleX(0);
    transform-origin: right;
  }
}
</style>
