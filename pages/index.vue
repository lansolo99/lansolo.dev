<template>
  <main id="index" class="flex flex-col items-start sm:flex-row">
    <HpSidebar />

    <HpGridPosts :key="hpGridPostsKey" :context="context" :posts="posts" />
  </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Index',
  async fetch() {
    this.posts = await this.$content('posts')
      .only(['title', 'type', 'imgCover', 'tags', 'createdAt'])
      .where(this.setFilter())
      .sortBy('created', 'asc')
      // .limit(16)
      .fetch()

    this.hpGridPostsKey++
  },
  fetchOnServer: false,
  data() {
    return {
      context: 'home',
      hpGridPostsKey: 0,
      posts: [],
    }
  },
  computed: {
    ...mapState(['selectedTags']),
  },
  watch: {
    selectedTags(newValue, oldValue) {
      this.$fetch()
    },
  },
  methods: {
    setFilter() {
      if (this.selectedTags.length === 0) return null

      return { tags: { $containsAny: this.selectedTags } }
    },
  },
}
</script>
