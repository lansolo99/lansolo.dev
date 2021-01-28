<template>
  <button
    class="absolute top-0 left-0 z-10 flex items-center justify-center w-12 h-12 p-3 transition duration-150 ease-out bg-white border-b-4 border-r-4 border-black focus:outline-none focus-visible:outline-white lg:hover:bg-primary-500 group"
    @click="$router.back()"
  >
    <iconPostBack
      class="w-full h-full text-black transition duration-150 ease-out fill-current lg:group-hover:text-white"
    />
  </button>
</template>

<script>
import iconPostBack from '~/assets/img/post_back.svg?inline'
export default {
  name: 'VBackBtn',
  components: {
    iconPostBack,
  },
}
</script>
