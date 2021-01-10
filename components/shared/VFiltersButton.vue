<template>
  <button
    class="flex text-sm border border-gray-600 outline-none"
    :class="{ 'cursor-default': isDisabled }"
    :disabled="isDisabled"
    @click="setTag()"
  >
    <!-- Label -->
    <div
      class="flex items-end justify-center px-3 py-1 capitalize"
      :class="{ 'bg-primary-500': selected }"
    >
      {{ label }}
    </div>

    <!-- Counter -->
    <div
      class="flex items-end justify-center px-3 py-1 border-l border-gray-600"
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
