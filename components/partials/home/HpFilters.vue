<template>
  <div class="flex flex-col items-start">
    <div>
      <p>
        <strong class="font-bold">{{ currentPostsCounter }}</strong> posts
      </p>
    </div>

    <!-- Tags -->
    <div class="w-full mt-4">
      <p class="text-lg font-heading">Categories:</p>
      <!-- Grid wrapper -->
      <div class="px-1">
        <!-- Grid -->
        <div class="flex flex-col -mx-2" data-cy="tags">
          <VFiltersButton
            v-for="(cat, i) in categories"
            :key="i"
            class="w-full px-1 mt-2"
            :label="cat"
            :selected="
              cat === 'All'
                ? selectedTags.length === 0
                : selectedTags.includes(cat)
            "
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
      categories: [
        'All',
        'devs',
        'artworks',
        'motion graphics',
        'short 3D films',
        'miscs',
      ],
      tags: [],
    }
  },
  computed: {
    ...mapState(['selectedTags', 'currentPostsCounter']),
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
