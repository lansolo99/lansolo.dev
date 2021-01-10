<template>
  <div
    id="grid"
    class="grid grid-cols-1 gap-1 sm:w-8/12 md:w-10/12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
  >
    <VPost v-for="(post, i) in posts" :key="i" :post="post" />
  </div>
</template>

<script>
export default {
  name: 'HpGridPosts',
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>
