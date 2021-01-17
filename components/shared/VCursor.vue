<template>
  <div ref="cursor" class="cursor"></div>
</template>

<script>
export default {
  name: 'VCursor',
  mounted() {
    const cursor = this.$refs.cursor
    document.addEventListener('mousemove', (e) => {
      cursor.setAttribute(
        'style',
        `top: ${e.pageY - 32}px; left: ${e.pageX - 32}px; `
      )
    })
  },
}
</script>

<style lang="postcss">
.cursor {
  @apply fixed h-16 w-16 top-0 left-0;
  pointer-events: none;
  z-index: 999;
  background-image: url('/hand.svg');
  background-repeat: no-repeat;
}
</style>
