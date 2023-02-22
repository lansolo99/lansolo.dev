<template>
  <div>
    <!-- Basic -->
    <button
      v-if="!isInRemovableFiltersList"
      tabindex="-1"
      class="w-full text-sm transition duration-150 ease-out border border-gray-600 outline-none group lg:hover:border-gray-400"
      :class="{ 'cursor-default': isDisabled }"
      :disabled="isDisabled"
      @click="setTag()"
    >
      <!-- Label -->
      <div
        :data-cy="label"
        class="w-full px-3 py-1 text-center"
        :class="{ 'bg-primary-500': selected }"
      >
        <!-- {{ label }} -->
        {{ capitalizeLabel }}
      </div>
    </button>
  </div>
</template>

<script>
import { capitalizeFirstLetter } from '@/utils/capitalize'
export default {
  name: 'VFiltersButton',
  components: {},
  props: {
    label: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      required: true,
    },
    context: {
      type: String,
      default: 'home',
    },
    isInRemovableFiltersList: {
      type: Boolean,
      default: false,
    },
  },
  async fetch() {
    const postsForTag = await this.$content('posts')
      .only(['title'])
      .where(this.getPostsForTag)
      .fetch()

    this.counter = postsForTag.length
  },
  data() {
    return {
      counter: 0,
    }
  },
  computed: {
    getPostsForTag(label) {
      return this.label !== 'all' ? { tags: { $containsAny: this.label } } : ''
    },
    isDisabled() {
      return this.label === 'all' && this.selected && this.context === 'home'
    },
    capitalizeLabel() {
      return capitalizeFirstLetter(this.label)
    },
  },
  methods: {
    setTag() {
      this.$emit('setTag', this.label)
    },
  },
}
</script>
