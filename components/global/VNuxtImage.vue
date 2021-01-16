<template>
  <div class="relative w-full my-10 overflow-hidden bg-primary-900 pb-6/12">
    <client-only>
      <cld-image
        :public-id="`lansolo.dev/posts/${path}`"
        dpr="auto"
        responsive="width"
        crop="fit"
        fetch-format="auto"
        width="auto"
        quality="auto"
        loading="lazy"
        :alt="title"
        class="absolute inset-0 z-10 object-cover cdy-wrapper"
      >
        <cld-placeholder type="blur"> </cld-placeholder>
      </cld-image>
    </client-only>
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
