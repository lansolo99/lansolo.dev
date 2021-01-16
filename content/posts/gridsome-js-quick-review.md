---
title: 'Gridsome.js quick review'
type: 'article'
imgCover: 'gridsome-js-quick-review'
tags: [vue, gridsome]
createdAt: 2019-06-07
---

In this post, I'll give a quick Gridsome review after having started using it.
<!--more-->

## Context and own history using Vue

I’ve been using Vue.js for nearly a year now and find the opportunities to use it more and more often.

It all started with [WeekX](https://weekx.xyz), an advanced to-do app focused on self-improvement coded with vanilla Vue.js. Then I tried Nuxt.js as I wanted an SEO friendly landing-page to present WeekX, so it takes advantage of the "generate" mode to build a static page . The third project was another Nuxt.js based app which is a mobile puzzle game app: [Smart Prisoners](https://smartprisoners.netlify.app/).

This time it’s just use the "SPA" mode but I decided to use Nuxt because of the abstract layer that ease the vue development in general. Aside from personal projects, I’ve come to realize I also could use Vue for real life small jobs I have here and there, that are mostly static landing-pages for [Banque Populaire](https://www.banquepopulaire.fr/). This time, I decided to give a try to [Gridsome.js](https://gridsome.org/), a static site generator for Vue.

## Gridsome in the Vue landscape

Gridsome might be seen as the Gatsby.js equivalent for Vue. Static site generators are one of the main piece of the [Jamstack concept](https://jamstack.org/) that got my interest since a few months. As far as I know, there’s only 3 options to generate static files from Vue.js : Nuxt, VuePress, and Gridsome.

Nuxt is server-side render focused but encompass a “generate” mode. VuePress seems to be designed to build static documentation. Gridsome is entirely focused on static site generating, and is project agnostic. The later is to my mind, the most appropriate tool to build static landing pages.

## Gridsome and Nuxt

I’ve used Gridsome for two very small projects so far. My first thoughts is it’s similar to Nuxt in many cases:

* The tree structure share same concepts regarding pages (routes generated from file names, layouts, static metas in pages..).
* Gridsome works with an official plugins ecosystem, available from the docs, easing the setup, a bit like Nuxt modules.
* However, some Nuxt methods are missing (SSR related) and vice-versa.
* Both of these tools are qualified for static site generation. When it’s about choosing one of the other, the following rule applies :
    * If it’s unsure about how the project will be served and the later might scale in the future, Nuxt is a safer because it’s more versatile and the community is bigger.
    * If it’s 100% sure the project will be static and small, I would go for Gridsome, simpler and static focused.

## Gridsome under the hood

* Gridsome highlights the concept of [page-query and static-query](https://gridsome.org/docs/querying-data/). As its name suggest, it’s about querying static or dynamic datas working with a [GraphQL layer](https://gridsome.org/docs/data-layer/) built-in. There’s also a GraphQL playground that we can use to know what data is available and how to query it, according to our own setup. This GraphQL feature seems to be the cornerstorne of Gridsome. I’ve seen it in action through the very well designed Udemy course I followed and I recommand : [Blazing-Fast Vue and GraphQL with Gridsome](https://www.udemy.com/course/blazing-fast-vue-and-graphql-with-gridsome/)
* The documentation is great, maybe the small animations sprinkled here and there account for this, same for the dark mode, but it’s quite pleasant to browse throughout the pages. I feel like it’s not overwhelming.
* Gridsome has specific tag names, such as <g-image> and <g-link>. G-image is awesome because it embarks a complete responsive image system (generated srcset, lazy-loading, cropping and resizing on the fly). G-link are links that embarks route-prefetching, therefore, navigating is a breeze.

## First try

* [Here](https://www.pommeclic.com/banquepopulaire/halloween/desktop/) is a very simple static landing page I’ve built with Gridsome. It’s a small contest for the Halloween 2019 event, with a simple form made with Vuetify + Vuelidate validations. The data is sent through php with an Ajax call. No way to use Node.js because the host is a shared hosting. I’m still wondering how to use environment variables in this context, but it’s out of the topic.
* The most noticable thing is the lazy loaded images giving a feeling of fast load.

## Conclusion

I think Gridsome is a very good pick for any Vue.js based static site, it offers a lot of features but perfectly works with a damn simple setup. I plan to rebuild my portfolio using it, and maybe fetch data from the Worpdress API, as Gridsome offers an integration to do so. It’s still in the early development phase, but seems very steady and usable at this time.

I will definitely keep learning and using it.
    