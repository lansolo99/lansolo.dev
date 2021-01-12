<template>
  <div>
    <article class="container relative mx-auto text-white md:mt-8 md:px-8">
      <!-- Cover Image(s) -->
      <div class="mx-auto" :class="{ 'max-w-680': post.type === 'article' }">
        <div class="relative w-full mx-auto overflow-hidden bg-red-700 pb-6/12">
          <nuxt-image
            v-for="(image, i) in setCoverImagesSrc"
            :key="i"
            class="absolute inset-0 object-cover"
            :src="image.src"
            :alt="image.title"
            :placeholder="true"
            :sizes="setCoverImageSizes"
          />
        </div>
      </div>

      <!-- Content -->
      <div class="p-4 mx-auto md:mt-5 max-w-680">
        <!-- Title -->
        <h1 class="text-2xl leading-snug md:text-3xl font-heading">
          {{ post.title }}
        </h1>

        <!-- Tags -->
        <div class="px-1 mt-2">
          <!-- Grid -->
          <div class="flex flex-wrap -mx-2">
            <!-- Items -->
            <div
              v-for="(tag, i) in post.tags"
              :key="i"
              class="relative px-1 mt-2"
            >
              <VFiltersButton
                :label="tag"
                :selected="false"
                context="post"
                @setTag="setTag"
              />
            </div>
          </div>
        </div>

        <!-- Date -->
        <VPostDate context="post" :date="post.createdAt" class="py-1 mt-4" />

        <!-- Body -->
        <nuxt-content
          :document="post"
          class="mt-10 prose text-white max-w-none"
        />
      </div>
    </article>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Post',
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()

    return { post }
  },

  computed: {
    setCoverImagesSrc() {
      switch (this.post.type) {
        case 'article':
          return [
            {
              title: this.post.title,
              src: this.post.imgCover,
            },
          ]
        case 'design':
          return this.post.imgList
      }
      return ''
    },
    setCoverImageSizes() {
      switch (this.post.type) {
        case 'article':
          return '640,640:768'
        case 'design':
          return '640,640:768,768:1024,1024:1280,1280:1536'
      }
      return ''
    },
  },
  methods: {
    ...mapMutations({
      setSelectedTag: 'SET_SELECTED_TAGS',
    }),
    setTag(label) {
      this.setSelectedTag([label])
      this.$router.push('/')
    },
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },
      ],
    }
  },
}
</script>

<style lang="postcss">
.nuxt-content-container {
  h2 {
    @apply text-white;
  }

  a {
    @apply text-primary-400;
  }

  ul,
  ol {
    li {
      @apply leading-tight;
    }
  }
}
</style>
