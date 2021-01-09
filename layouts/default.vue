<template>
  <div class="pb-10">
    <TheNavigationBar @show-side-panel="showSidePanel = true" />

    <Nuxt class="pt-24" />

    <SlideOver
      :show-side-panel="showSidePanel"
      @close-panel="showSidePanel = false"
    />

    <Modals />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSidePanel: false,
      mounted: false,
    }
  },
}
</script>

<style>
html {
  @apply bg-gray-300;
}
</style>
