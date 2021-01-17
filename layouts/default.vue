<template>
  <div class="">
    <TheHeader />
    <Nuxt class="pt-12" />
    <!-- <div ref="cursor" class="cursor"></div> -->
  </div>
</template>

<script>
export default {
  name: 'Default',
  // mounted() {
  //   const cursor = this.$refs.cursor
  //   document.addEventListener('mousemove', (e) => {
  //     cursor.setAttribute(
  //       'style',
  //       `top: ${e.pageY - 32}px; left: ${e.pageX - 32}px; `
  //     )
  //   })
  // },
}
</script>
