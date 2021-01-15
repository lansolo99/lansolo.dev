<template>
  <div>
    <main
      class="flex items-center justify-center w-screen h-screen text-center text-white"
    >
      <div class="flex flex-col w-auto">
        <h1 v-if="error.statusCode === 404" class="heading">Page not found!</h1>

        <h1 v-else class="heading">An error occurred</h1>

        <NuxtLink
          to="/"
          class="inline-block px-5 py-2 mx-auto mt-4 text-lg border border-white border-opacity-50"
          >Back to home</NuxtLink
        >
      </div>
    </main>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog',
}
</script>

<style lang="postcss">
.heading {
  @apply text-3xl font-heading;

  @screen lg {
    @apply text-4xl;
  }
}
</style>
