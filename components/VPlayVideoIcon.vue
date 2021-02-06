<template>
  <button
    class="absolute z-10 w-12 h-12 duration-150 ease-out transform -translate-x-1/2 -translate-y-1/2 outline-none md:w-20 md:h-20 top-1/2 left-1/2 focus-visible:outline-white lg:hover:scale-125"
  >
    <!-- Round -->
    <div class="w-full h-full bg-white shadow-lg bg-opacity-90"></div>

    <!-- Triangle -->
    <IconVideoPlayTriangle
      class="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 fill-current md:ml-1 md:w-8 md:h-8 top-1/2 left-1/2 text-primary-500"
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
