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
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Filters',
  data() {
    return {
      types: ['article', 'design'],
    }
  },
  computed: {
    ...mapState(['selectedTags']),
  },
  methods: {
    ...mapMutations({
      setSelectedTag: 'SET_SELECTED_TAGS',
    }),
    setTags(label) {
      // Is All
      if (label === 'all') {
        this.setSelectedTag([])
        return
      }

      // Others tags
      if (this.selectedTags.includes(label)) {
        const updatedTagsList = this.selectedTags.filter((tag) => {
          return tag !== label
        })

        this.setSelectedTag(updatedTagsList)
      } else {
        const updatedTagsList = [...this.selectedTags, label]
        this.setSelectedTag(updatedTagsList)
      }
    },
  },
}
</script>
