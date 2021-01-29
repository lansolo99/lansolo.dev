<template>
  <div class="relative w-full my-10 overflow-hidden bg-primary-900 pb-6/12">
    <VImageLoader />

    <img
      :src="`https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/lansolo.dev/posts/${path}`"
      :alt="title"
      class="absolute inset-0 z-10 object-cover cdy-wrapper"
    />
    <!-- loading="lazy" -->
    <!-- responsive="width" -->
  </div>
</template>

<script>
export default {
  name: 'VNuxtImage',
  props: {
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="postcss">
.cdy-wrapper {
  img {
    height: 100%;
    width: 100%;
    margin: 0;
    object-fit: cover;
  }
}
</style>
