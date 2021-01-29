<template>
  <div>
    <article class="container relative mx-auto text-white">
      <!-- Avatar -->
      <div id="avatar" class="relative w-40 h-40 p-8 mx-auto mt-8">
        <img
          src="https://res.cloudinary.com/lansolo99/image/upload/c_fit,dpr_auto,q_auto,w_200/lansolo.dev/about/avatar.png"
          alt="sc"
          class="absolute inset-0 object-cover"
        />
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
