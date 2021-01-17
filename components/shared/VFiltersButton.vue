<template>
  <button
    tabindex="-1"
    class="flex items-stretch text-sm border border-gray-600 outline-none"
    :class="{ 'cursor-default': isDisabled }"
    :disabled="isDisabled"
    @click="setTag()"
  >
    <!-- Label -->
    <div
      class="flex px-3 py-1 text-left"
      :class="{ 'bg-primary-500': selected }"
    >
      {{ label }}
    </div>

    <!-- Counter -->
    <div
      v-if="context === 'home'"
      class="flex px-3 py-1 border-l border-gray-600"
    >
      {{ counter }}
    </div>
  </button>
</template>

<script>
export default {
  name: 'VFiltersButton',
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
  },
  methods: {
    setTag() {
      this.$emit('setTag', this.label)
    },
  },
}
</script>
