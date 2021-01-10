<template>
  <main id="index" class="flex flex-col sm:flex-row">
    <HpSidebar />

    <HpGridPosts :key="hpGridPostsKey" :posts="posts" />
  </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Index',
  async fetch() {
    console.log(this.setFilter())
    this.posts = await this.$content('posts')
      .where(this.setFilter())
      .sortBy('created', 'desc')
      .limit(16)
      .fetch()

    this.hpGridPostsKey++
  },
  fetchOnServer: false,
  data() {
    return {
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
      return { type: { $in: this.selectedTags } }
    },
  },
}
</script>
