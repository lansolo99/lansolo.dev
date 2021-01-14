<template>
  <div class="flex flex-col items-start space-y-8">
    <!-- All -->
    <VFiltersButton
      label="all"
      :selected="selectedTags.length === 0"
      @setTag="setTags"
    />

    <!-- Types -->
    <div>
      <p class="font-heading">Types:</p>
      <div class="mt-3 space-y-3">
        <VFiltersButton
          v-for="(type, i) in types"
          :key="i"
          :label="type"
          :selected="selectedTags.includes(type)"
          @setTag="setTags"
        />
      </div>
    </div>

    <!-- Tags -->
    <div>
      <p class="font-heading">Tags:</p>
      <div class="mt-3 space-y-3">
        <VFiltersButton
          v-for="(tag, i) in stripedTagListFromTypes"
          :key="i"
          :label="tag"
          :selected="selectedTags.includes(tag)"
          @setTag="setTags"
        />
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
    ...mapState(['selectedTags']),
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
      // All
      if (label === 'all') {
        this.setSelectedTag([])
        return
      }

      // Tags
      if (this.selectedTags.includes(label)) {
        const updatedTagsList = this.selectedTags.filter((tag) => {
          return tag !== label
        })
        this.setSelectedTag(updatedTagsList)
      } else {
        const updatedTagsList = [...this.selectedTags, label]
        this.setSelectedTag(updatedTagsList)
      }

      // Scroll to top
      window.scroll(0, 0)
    },
  },
}
</script>
