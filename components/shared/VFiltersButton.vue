<template>
  <div>
    <!-- Basic -->
    <button
      v-if="!isInRemovableFiltersList"
      tabindex="-1"
      class="flex items-stretch text-sm transition duration-150 ease-out border border-gray-600 outline-none group lg:hover:border-gray-400"
      :class="{ 'cursor-default': isDisabled }"
      :disabled="isDisabled"
      @click="setTag()"
    >
      <!-- Label -->
      <div
        :data-cy="label"
        class="flex px-3 py-1 text-left"
        :class="{ 'bg-primary-500': selected }"
      >
        {{ label }}
      </div>
    </button>

    <!-- Removable filter list item -->
    <button
      v-else
      tabindex="-1"
      class="flex items-stretch w-full text-sm text-black transition duration-150 ease-out bg-white outline-none hover:bg-primary-500 group"
      :class="{ 'cursor-default pointer-events-none': isDisabled }"
      :disabled="isDisabled"
      @click="setTag()"
    >
      <!-- Label -->
      <div
        class="flex flex-grow px-3 py-1 font-bold text-left group-hover:text-white"
      >
        {{ label }}
      </div>

      <!-- Close -->
      <div class="flex items-center justify-center p-2 w-7">
        <CrossRemoveSign
          class="w-full h-full text-black fill-current group-hover:text-white"
        />
      </div>
    </button>
  </div>
</template>

<script>
import CrossRemoveSign from '~/assets/img/cross-remove-sign.svg?inline'
export default {
  name: 'VFiltersButton',
  components: {
    CrossRemoveSign,
  },
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
  },
  methods: {
    setTag() {
      this.$emit('setTag', this.label)
    },
  },
}
</script>
