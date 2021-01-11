<template>
  <button
    class="flex items-stretch text-xs border border-gray-600 outline-none"
    :class="{ 'cursor-default': isDisabled || context === 'post' }"
    :disabled="isDisabled"
    @click="setTag()"
  >
    <!-- Label -->
    <div
      class="flex px-3 py-1 text-left capitalize"
      :class="{ 'bg-primary-500': selected }"
    >
      {{ label }}
    </div>

    <!-- Counter -->
    <div
      v-if="context === 'home'"
      class="flex px-3 py-1 border-l border-gray-600"
    >
      90
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
  computed: {
    isDisabled() {
      return this.label === 'all' && this.selected
    },
  },
  methods: {
    setTag() {
      this.$emit('setTag', this.label)
    },
  },
}
</script>
