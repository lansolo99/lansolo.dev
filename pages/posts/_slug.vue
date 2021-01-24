<template>
  <div>
    <article
      class="container relative mx-auto text-white border-t-0 border-l-4 border-r-4 border-black md:mt-8 md:px-8"
    >
      <!-- Cover Image(s) -->
      <div
        class="flex flex-col justify-center mx-auto"
        :class="[
          { 'max-w-680': isPostTypeArticle },
          { 'max-w-1000': isPostTypeDesignWithoutImgList },
          { 'max-w-1920': isPostTypeDesignWithImgList },
        ]"
      >
        <div
          class="relative w-full mx-auto overflow-hidden bg-primary-900"
          :class="[
            { 'pb-6/12': isPostTypeArticle },
            { 'pb-full': isPostTypeDesignWithoutImgList },
            { 'pb-c56%': isPostTypeDesignWithImgList },
          ]"
        >
          <VImageLoader />

          <img
            v-for="(image, i) in setCoverImagesSrc"
            :key="i"
            :src="`https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_auto/v1/lansolo.dev/posts/${image.src}`"
            alt=""
            class="absolute inset-0 z-10 object-cover cdy-wrapper"
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
        <div class="markdown-container">
          <nuxt-content
            :document="post"
            class="mt-10 prose text-white max-w-none"
          />
        </div>

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
      .only(['title', 'type', 'imgCover', 'tags', 'createdAt', 'path'])
      .where({ tags: { $containsAny: post.tags } })
      .sortBy('created', 'desc')
      .fetch()

    const shuffleResults = (results) => {
      return results.sort(() => Math.random() - 0.5).slice(0, 4)
    }

    return { post, relatedPosts: shuffleResults(relatedPosts) }
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
    isPostTypeDesignWithImgList() {
      return this.post.type === 'design' && this.post.imgList
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
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.description,
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `https://lansolo.dev/posts/${this.$route.params.slug}`,
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'lansolo.dev',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_1000/v1/lansolo.dev/posts/${this.post.imgCover}`,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.post.title,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://lansolo.dev/posts/${this.$route.params.slug}`,
        },
      ],
    }
  },
}
</script>

<style lang="postcss">
.cdy-wrapper {
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
