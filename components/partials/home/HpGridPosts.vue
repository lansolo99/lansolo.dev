<template>
  <div
    id="grid"
    class="grid grid-cols-1 gap-1 border-l-4 border-r-4 border-black"
    :class="setGridClasses"
  >
    <VPost v-for="(post, i) in posts" :key="i" :post="post" />
  </div>
</template>

<script>
export default {
  name: 'HpGridPosts',
  props: {
    context: {
      type: String,
      required: true,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
  computed: {
    setGridClasses() {
      switch (this.context) {
        case 'home':
          return 'md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'
        case 'post':
          return 'sm:grid-cols-2'
      }
      return ''
    },
  },
}
</script>
