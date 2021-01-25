<template>
  <div>
    <article class="container relative mx-auto text-white">
      <!-- Avatar -->
      <div id="avatar" class="relative w-40 h-40 p-8 mx-auto mt-8">
        <client-only>
          <cld-image
            public-id="lansolo.dev/about/avatar.png"
            crop="fit"
            dpr="auto"
            responsive="width"
            fetch-format="auto"
            width="auto"
            quality="auto"
            alt="Theme"
            class="absolute inset-0 object-cover"
          >
            <cld-placeholder type="blur"></cld-placeholder>
          </cld-image>
        </client-only>
      </div>

      <!-- Content -->
      <div class="p-4 mx-auto mt-5 max-w-680">
        <!-- Title -->
        <h1 class="text-2xl leading-snug md:text-3xl font-heading">
          {{ page.title }}
        </h1>

        <!-- Body -->
        <div class="markdown-container">
          <nuxt-content
            :document="page"
            class="mt-10 prose text-white max-w-none about"
          />
        </div>
      </div>
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
}
</script>

<style lang="postcss">
.markdown-container {
  .prose {
    &.about {
      img {
        margin: 0;
      }
    }
  }
}
</style>
