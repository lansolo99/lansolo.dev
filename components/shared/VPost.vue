<template>
  <article class="relative bg-pink-600">
    <img :src="post.imgFeatured" :alt="post.title" />

    <div class="absolute bottom-0 left-0 mb-4 ml-4">
      <!-- Date -->
      <div class="inline-block px-2 bg-primary-500">
        {{ postFormattedDate }}
      </div>
      <!-- Title -->
      <h3>
        <mark class="p-2 text-xl leading-none text-white bg-black font-heading"
          >{{ post.title }}
        </mark>
      </h3>
    </div>
  </article>
</template>

<script>
export default {
  name: 'VPost',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    postFormattedDate() {
      return this.$dateFns.format(new Date())
    },
  },
}
</script>
