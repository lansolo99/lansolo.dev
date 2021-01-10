<template>
  <main id="index" class="flex flex-col sm:flex-row">
    <HpSidebar />

    <HpGridPosts :posts="posts" />
  </main>
</template>

<script>
export default {
  name: 'Index',
  async asyncData({ $content }) {
    const posts = await $content('posts')
      .sortBy('created', 'desc')
      .limit(16)
      .fetch()

    return { posts }
  },
}
</script>
