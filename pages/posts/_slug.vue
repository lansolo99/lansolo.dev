<template>
  <div>
    <article class="container relative mx-auto text-white md:mt-8 md:px-8">
      <!-- Cover Image(s) -->
      <div
        class="flex flex-col justify-center mx-auto bg-yellow-500"
        :class="[
          { 'max-w-680': isPostTypeArticle },
          { 'max-w-1000': isPostTypeDesignWithoutImgList },
        ]"
      >
        <div
          class="relative w-full mx-auto overflow-hidden bg-red-700"
          :class="{ 'pb-6/12': isPostTypeArticle }"
        >
          <nuxt-image
            v-for="(image, i) in setCoverImagesSrc"
            :key="i"
            :src="image.src"
            :alt="image.title"
            :class="{
              'absolute inset-0 object-cover': isPostTypeArticle,
            }"
            :placeholder="true"
            :sizes="setCoverImageSizes"
          />
        </div>
      </div>

      <!-- Content -->
      <div class="p-4 pt-8 mx-auto md:pt-10 md:mt-5 max-w-680">
        <!-- Title -->
        <h1 class="text-2xl leading-snug md:text-4xl font-heading">
          {{ post.title }}
        </h1>

        <!-- Tags -->
        <div class="px-1 mt-4 md:mt-10">
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
                :context="context"
                @setTag="setTag"
              />
            </div>
          </div>
        </div>

        <!-- Date -->
        <VPostDate
          :context="context"
          :date="post.createdAt"
          class="py-1 mt-4"
        />

        <!-- Body -->
        <nuxt-content
          :document="post"
          class="mt-10 prose text-white max-w-none"
        />

        <!-- Related -->
        <div class="mt-10">
          <h2 class="text-2xl font-bold">Related posts</h2>

          <HpGridPosts :context="context" :posts="relatedPosts" class="mt-5" />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import dpr from '@/mixins/dpr.js'

export default {
  name: 'Post',
  mixins: [dpr],
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()

    const relatedPosts = await $content('posts')
      .only(['title', 'type', 'imgCover', 'tags', 'createdAt'])
      .where({ tags: { $containsAny: post.tags } })
      .sortBy('created', 'desc')
      .limit(4)
      .fetch()

    return { post, relatedPosts }
  },
  data() {
    return {
      context: 'post',
    }
  },
  computed: {
    isPostTypeArticle() {
      return this.post.type === 'article'
    },
    isPostTypeDesignWithoutImgList() {
      return this.post.type === 'design' && !this.post.imgList
    },
    setCoverImagesSrc() {
      const regularCoverImg = [
        {
          title: this.post.title,
          src: this.post.imgCover,
        },
      ]

      switch (this.post.type) {
        case 'article':
          return regularCoverImg
        case 'design':
          return this.post.imgList || regularCoverImg
      }
      return ''
    },
    setCoverImageSizes() {
      switch (this.post.type) {
        case 'article':
          return `${640 * dpr},640:${768 * dpr}`
        case 'design':
          return `640:${768 * dpr},768:${1024 * dpr},1024:${1280 * dpr},1280:${
            1536 * dpr
          }`
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
