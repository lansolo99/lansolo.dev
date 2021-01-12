<template>
  <div class="relative w-full my-10 overflow-hidden bg-red-700 pb-6/12">
    <nuxt-image
      class="absolute inset-0 object-cover"
      :src="path"
      :alt="title"
      :placeholder="true"
      sizes="640,768:768"
    />
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
