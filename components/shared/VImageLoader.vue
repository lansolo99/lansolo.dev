<template>
  <div
    class="absolute flex items-center justify-center w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
  >
    <div class="loader-inner ball-beat">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VImageLoader',
}
</script>

<style lang="postcss" scoped>
.loader-inner {
  transform: scale(0.5, 0.5);
}

.ball-beat > div {
  @apply bg-primary-500;
}
</style>
