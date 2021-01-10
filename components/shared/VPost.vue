<template>
  <article class="relative bg-pink-600">
    <!-- Image -->
    <nuxt-image
      :src="post.imgFeatured"
      :alt="post.title"
      width="2000"
      height="1000"
      :placeholder="true"
    />

    <!-- Post type -->
    <div class="absolute top-0 right-0 w-8 h-8 mt-2 mr-2">
      <img
        class="absolute w-full h-full"
        src="~/assets/img/post_type_shape.svg"
        alt=""
      />

      <img
        class="absolute w-full h-full transform scale-60"
        src="~/assets/img/post_type_icon_design.svg"
        alt=""
      />
    </div>

    <!-- Date + title -->
    <div class="absolute bottom-0 left-0 mb-2 ml-2">
      <!-- Date -->
      <div class="inline-block px-2 text-sm bg-primary-500">
        {{ postFormattedDate }}
      </div>

      <!-- Title -->
      <h1 class="py-1 leading-6 padded-multiline">
        <span class="inline p-2 text-xl text-white bg-black font-heading">{{
          post.title
        }}</span>
      </h1>
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

<style lang="postcss">
.padded-multiline span {
  box-decoration-break: clone;
}
</style>
