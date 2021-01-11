<template>
  <div class="inline-block px-2 text-sm bg-primary-500">
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
  },
}
</script>
