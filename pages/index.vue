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
    if (this.isLoading || this.eof) {
      return
    }

    try {
      this.isLoading = true
      let usersRef = this.$fire.firestore
        .collection('users')
        .limit(this.batchSize)

      if (this.lastDoc) {
        usersRef = usersRef.startAfter(this.lastDoc)
      }

      const snapshot = await usersRef.get()

      this.eof = snapshot.empty

      if (snapshot.size > 0) {
        this.lastDoc = snapshot.docs[snapshot.docs.length - 1]

        /* eslint-disable nuxt/no-timing-in-fetch-data */
        setTimeout(() => {
          for (const doc of snapshot.docs) {
            this.users.push(doc.data())
          }
          this.isLoading = false
        }, 200)
      } else {
        this.isLoading = false
      }

      // const usersDoc = snapshot.docs.map((doc) => {
      //   return doc.data()
      // })

      // this.users = usersDoc
    } catch (error) {
      this.isLoading = false
      console.log(error)
    }
  },

  // async fetch() {
  //   this.posts = await this.$content('posts')
  //     .only(['title', 'type', 'imgCover', 'tags', 'createdAt'])
  //     .where(this.setFilter())
  //     .sortBy('createdAt', 'desc')
  //     // .limit(16)
  //     .fetch()

  //   this.hpGridPostsKey++
  // },
  fetchOnServer: false,
  data() {
    return {
      context: 'home',
      hpGridPostsKey: 0,
      posts: [],
      isLoading: false,
      eof: false,
      lastDoc: null,
      batchSize: 16,
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
  mounted() {
    window.addEventListener('scroll', this.loadMore)
  },
  destroyed() {
    window.removeEventListener('scroll', this.loadMore)
  },
  methods: {
    setFilter() {
      if (this.selectedTags.length === 0) return null

      return { tags: { $containsAny: this.selectedTags } }
    },
    loadMore() {
      const elementBounds = this.$el.getBoundingClientRect()
      // Add extra padding to load earlier even before the bottom of the element is in view.
      const padding = 100
      const bottomOfWindow =
        elementBounds.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) + padding
      if (bottomOfWindow && !this.isLoading && !this.eof) {
        this.$fetch()
      }
    },
  },
}
</script>
