<template>
  <button
    class="absolute z-20 w-20 h-20 duration-150 ease-out transform -translate-x-1/2 -translate-y-1/2 outline-none top-1/2 left-1/2 focus-visible:outline-white lg:hover:scale-125"
  >
    <!-- Round -->
    <div class="w-full h-full bg-white shadow-lg bg-opacity-90"></div>

    <!-- Triangle -->
    <IconVideoPlayTriangle
      class="absolute w-8 h-8 ml-1 transform -translate-x-1/2 -translate-y-1/2 fill-current top-1/2 left-1/2 text-primary-500"
    />
  </button>
</template>

<script>
import IconVideoPlayTriangle from '~/assets/img/icon-video-play-triangle.svg?inline'
export default {
  name: 'VPlayVideoIcon',
  components: {
    IconVideoPlayTriangle,
  },
}
</script>
