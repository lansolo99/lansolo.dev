<template>
  <div class="flex flex-col items-start space-y-5">
    <!-- All -->
    <button class="flex border border-gray-600" @click="filterPosts('')">
      <div class="px-3 py-1">All</div>
      <div class="px-3 py-1 border-l border-gray-600">90</div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  methods: {
    filterPosts() {
      console.log('filterPosts')
    },
  },
}
</script>
