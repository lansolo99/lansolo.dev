<template>
  <div
    class="inline-block px-2 bg-primary-500"
    :class="context === 'post' ? 'text-sm' : 'text-sm'"
  >
    {{ postFormattedDate }}
  </div>
</template>

<script>
import postFormattedDate from '@/mixins/postFormattedDate.js'
export default {
  name: 'VPostDate',
  mixins: [postFormattedDate],
  props: {
    date: {
      type: String,
      required: true,
    },
    context: {
      type: String,
      default: 'home',
    },
  },
}
</script>
