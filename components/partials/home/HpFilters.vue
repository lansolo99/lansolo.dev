<template>
  <div class="flex flex-col items-start">
    <div>
      <p>
        <strong class="font-bold">{{ currentPostsCounter }}</strong> posts
      </p>
    </div>

    <!-- Tags -->
    <div class="w-full mt-4">
      <p class="font-heading">Categories:</p>
      <!-- Grid wrapper -->
      <div class="px-1">
        <!-- Grid -->
        <div class="flex flex-col -mx-2" data-cy="tags">
          <VFiltersButton
            class="w-full px-1 mt-2"
            label="All"
            :selected="selectedTags.length === 0"
            @setTag="setTags"
          />
          <VFiltersButton
            class="w-full px-1 mt-2"
            label="video"
            :selected="selectedTags.includes('video')"
            @setTag="setTags"
          />
          <VFiltersButton
            class="px-1 mt-2"
            label="node"
            :selected="selectedTags.includes('node')"
            @setTag="setTags"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Filters',
  async fetch() {
    const postTags = await this.$content('posts').only(['tags']).fetch()

    this.tags = Array.from(
      new Set(
        postTags
          .map((post) => {
            return post.tags
          })
          .flat()
      )
    )
  },
  data() {
    return {
      types: ['article', 'design'],
      tags: [],
    }
  },
  computed: {
    ...mapState(['selectedTags', 'currentPostsCounter']),
    stripedTagListFromTypes() {
      return this.tags.filter((tag) => {
        return !this.types.includes(tag)
      })
    },
  },
  methods: {
    ...mapMutations({
      setSelectedTag: 'SET_SELECTED_TAGS',
    }),
    setTags(label) {
      // All || reset
      if (['All'].includes(label)) {
        this.setSelectedTag([])
        return
      }

      // Tags
      if (!this.selectedTags.includes(label)) {
        const updatedTagsList = [label]
        this.setSelectedTag(updatedTagsList)
      }

      // Scroll to top
      window.scroll(0, 0)
    },
  },
}
</script>
