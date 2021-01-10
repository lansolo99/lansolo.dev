<template>
  <main id="index" class="flex flex-col sm:flex-row">
    <!-- Sidebar -->
    <div class="px-6 py-6 space-y-8 sm:w-4/12 md:w-2/12">
      <h2 class="text-lg font-medium leading-snug">
        Designs and front-end journal.
      </h2>
      <div>Filters</div>
    </div>

    <!-- <div class="bg-blue-400">grid</div> -->
    <HpGridPosts :posts="posts" />
  </main>
</template>

<script>
export default {
  name: 'Index',

  async asyncData({ $content }) {
    const posts = await $content('posts')
      .sortBy('createdAt', 'desc')
      .limit(16)
      .fetch()

    return { posts }
  },
}
</script>
