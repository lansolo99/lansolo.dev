<template>
  <div>
    <article class="container relative mx-auto text-white md:mt-8 md:px-8">
      <!-- Avatar -->
      <div class="relative w-40 h-40 mx-auto">
        <nuxt-image
          class="absolute inset-0 object-cover"
          :src="page.imgCover"
          alt="avatar"
        />
        <!-- :placeholder="true" -->
        <!-- sizes="" -->
      </div>

      <!-- Content -->
      <div class="p-4 mx-auto md:mt-5 max-w-680">
        <!-- Title -->
        <h1 class="text-2xl leading-snug md:text-3xl font-heading">
          {{ page.title }}
        </h1>

        <!-- Body -->
        <nuxt-content
          :document="page"
          class="mt-10 prose text-white max-w-none"
        />

        <VSocialLinks :sociallinks="socialLinks" />
      </div>

      <!-- Content -->
    </article>
  </div>
</template>

<script>
export default {
  name: 'About',
  async asyncData({ $content }) {
    const page = await $content('about/about').fetch()
    return { page }
  },
  data() {
    return {
      socialLinks: [
        {
          name: 'linkedin',
          url: 'http://fr.linkedin.com/in/stephanechangarnier',
        },
        {
          name: 'twitter',
          url: 'https://twitter.com/lansolo191',
        },
        {
          name: 'github',
          url: 'https://github.com/lansolo99',
        },
        {
          name: 'codesandbox',
          url: 'https://codesandbox.io/u/lansolo99',
        },
        {
          name: 'dev.to',
          url: 'https://dev.to/lansolo99',
        },
        {
          name: 'vimeo',
          url: 'https://vimeo.com/user9314545',
        },
        {
          name: 'tumblr',
          url: 'http://niveaumoins1.tumblr.com/',
        },
        {
          name: 'behance',
          url: 'https://www.behance.net/niveaumoins1',
        },
      ],
    }
  },
}
</script>
